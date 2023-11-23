import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (err) {
        console.log(err);
        throw new Error("Could not connect to MongoDB", err);
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (err) {
        console.log(err);
        throw new Error("Could not disconnect to MongoDB", err);
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map