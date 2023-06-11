import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { connect } from "mongoose";

export default __dirname;

export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://lautaronehuensettembrini:Pancha1776@cluster1.uw9ykgh.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("conectar a MongoDB");
  } catch (e) {
    console.log(e);
    throw new Error("Error de conexión");
  }
}