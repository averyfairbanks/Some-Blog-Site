import { Router } from "express";
import {
    createItem,
    deleteItem,
    getItemById,
    getItems,
    getItemsPaginated,
    updateItem,
} from "../controllers/itemControllers";

const router = Router();

router.get("/", getItems);
router.get("/paginated", getItemsPaginated);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
