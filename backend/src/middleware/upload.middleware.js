import multer from "multer";
import path from "path";

export class UploadProvider {
  static storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.resolve("./public/");
      cb(null, uploadPath); // Define o diretório de upload
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname); // Pega a extensão do arquivo
      cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`); // Define o nome do arquivo
    }
  });

  static fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Arquivo não suportado. Apenas imagens são permitidas."), false);
    }
  };

  static upload = multer({
    storage: UploadProvider.storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB
    fileFilter: UploadProvider.fileFilter,
  });

  static singleImageUpload = UploadProvider.upload.single("image"); // Para um único arquivo
  static multipleImageUpload(req, res, next) {
    const uploadMultiple = UploadProvider.upload.array("images", 5); // Até 5 imagens
    uploadMultiple(req, res, (err) => {
      console.log(req.files, "<-")
      if (err) {
        console.log(err)
        return res.status(400).json({ error: err.message });
      }
      next();
    });
    
  }
}
