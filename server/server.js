const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Essential: Bind the router db to the app for json-server-auth to work
server.db = router.db;

// 1. Basic Middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// 2. Custom RBAC Middleware (Before json-server-auth logic if needed, or after)
// We'll place it after json-server-auth handles the JWT and attaches `req.user`
server.use(auth);

server.use((req, res, next) => {
  const { method, url, user } = req;

  // Public READ access for everyone
  if (method === 'GET') return next();

  // For write operations, check permissions
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    // If not logged in, auth middleware should have handled it, but double-check
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    // 1. ADMIN - Can do anything
    if (user.role === 'Admin') return next();

    // 2. RESOURCE OWNERSHIP - For Editors/Authors
    const pathParts = url.split('/').filter(Boolean);
    const resource = pathParts[0]; // e.g., 'posts', 'comments', 'users'
    const id = pathParts[1];

    // Creating new resources is allowed for all logged users
    if (method === 'POST') return next();

    // Modifying existing resources: check ownership
    if (id) {
      const dbResource = router.db.get(resource).find({ id }).value();

      if (!dbResource) return next(); // json-server will handle 404

      // Ownership criteria:
      // - Users: check if id matches user.id
      // - Posts/Comments: check if authorId matches user.id
      const ownerId = resource === 'users' ? dbResource.id : dbResource.authorId;

      if (String(ownerId) !== String(user.id)) {
        return res.status(403).json({
          message:
            'Access Denied: You are not the owner of this resource and do not have Admin privileges.',
        });
      }
    }
  }

  next();
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log('--------------------------------------------');
  console.log('🚀 Pulse Server with Advanced RBAC is running');
  console.log(`Port: ${PORT}`);
  console.log('--------------------------------------------');
  console.log('Role Permissions:');
  console.log(' - Admin: FULL ACCESS (Read/Write/Delete everything)');
  console.log(' - Editor: Can write posts/comments. Can EDIT/DELETE ONLY OWN content.');
  console.log(' - Public: READ ONLY (GET requests)');
  console.log('--------------------------------------------');
});
