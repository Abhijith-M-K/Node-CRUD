# Node-CRUD

Create REST APIs using expressJs that allows to perform CRUD operations on Camera entity, as well as do CRUD operations on "network of cameras"(CameraNetworks). The "networks of camera" will consist of "cameras" that can be mutually inclusive. On performing the delete operations on the camera table the CameraNetworks table should be updated accordingly.


Technologies used: Node.js,express.js,MongoDB,Postman,Thunder client

________________________________________
Adding a camera file:

router post
Url for adding a file: http://localhost:3000/add-camera

________________________________________
Get all camera files

router get
Get all file : http://localhost:3000/get-camera
________________________________________

Get a camera file

router get
Get a file : http://localhost:3000/get-camera/:id

_______________________________________

Update a file

router put
Update a file :http://localhost:3000/get-camera/:id
_______________________________________

Remove a camera file
router delete

Remove a file : http://localhost:3000/remove-camera/:id





________________________________________
Adding a Network file:

router post
Url for adding a file: http://localhost:3000/add-network

________________________________________
Get all Network files

router get
Get all file : http://localhost:3000/cameraNetworks
________________________________________

Get a Network file

router get
Get a file : http://localhost:3000/cameraNetworks/:id

_______________________________________

Update a file

router put
Update a file :http://localhost:3000/cameraNetworks/:id
_______________________________________

Remove a Network file
router delete

Remove a file : http://localhost:3000/remove-network/:id

