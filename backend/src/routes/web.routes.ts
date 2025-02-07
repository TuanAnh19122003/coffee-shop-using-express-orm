import express, { Express, Request,Response, Router } from "express";
import RoleController from "@controllers/roleController";
import UserController from "@controllers/userContoller";
import multer from "multer";
import path from "path";

const router: Router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const nameWithoutExt = path.basename(file.originalname, ext);
        
        const now = new Date();
        const timestamp = now.toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');

        function removeVietnameseTones(str: string){
            return str
                .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/đ/g, "d").replace(/Đ/g, "D")
        };

        // Xử lý tên file
        let baseName = removeVietnameseTones(nameWithoutExt.toLowerCase());

        cb(null, `${baseName}-${timestamp}${ext}`);
    },
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    },
});

router.get('/roles', (req: Request, res: Response) =>{
    RoleController.index(req, res);
})
router.get('/roles/create', (req: Request, res: Response) =>{
    RoleController.showFormCreate(req, res);
})
router.post('/roles/create', (req: Request, res: Response) =>{
    RoleController.create(req, res);
})
router.get('/roles/:id/edit', (req: Request, res: Response)=>{
    RoleController.showFormEdit(req, res);
})
router.post('/roles/:id/edit', (req: Request, res: Response) =>{
    RoleController.edit(req, res);
})
router.get('/roles/:id/delete', (req: Request, res: Response) =>{
    RoleController.delete(req, res);
})
router.get('/roles/:id/detail', (req: Request, res: Response)=>{
    RoleController.showFormDetail(req, res);
})

// Router User
router.get('/users', (req: Request, res: Response) =>{
    UserController.index(req, res);
})
router.get('/users/create',  (req: Request, res: Response) =>{
    UserController.showFormCreate(req, res);
})
router.post('/users/create', upload.single('image'), (req: Request, res: Response) =>{
    UserController.create(req, res);
})
router.get('/users/:id/edit',  (req: Request, res: Response) =>{
    UserController.showFormEdit(req, res);
})
router.post('/users/:id/edit', upload.single('image'), (req: Request, res: Response) =>{
    UserController.edit(req, res);
})
router.get('/users/:id/delete', (req: Request, res: Response) =>{
    UserController.delete(req, res);
})
router.get('/users/:id/detail', (req: Request, res: Response)=>{
    UserController.showFormDetail(req, res)
})

export default router;