// import { MongoClient } from "mongodb";

// // export async function GET(request) {
// //   console.log(request);
// //   return Response.json({ message: "getdata" });
// // }

// export async function POST(req) {
//   const { email, name, message } = await req.json();

//   if (
//     !email ||
//     !email.includes("@") ||
//     !name ||
//     name.trim() === "" ||
//     !message ||
//     message.trim() === ""
//   ) {
//     return Response.json({ message: "Invalid input." });
//   }

//   const newMessage = { email, name, message };
  
//   let client;
//   const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_custername}.b8gi7.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=Cluster0`;

//   try {
//     client = await MongoClient.connect(connectionString);

//     const db = client.db();
//     const result = await db.collection("message").insertOne(newMessage);
//     newMessage.id = result.insertedId;
//   } catch (error) {
//     return Response.json({ message: "connet mongdo error" });
//   } finally {
//     client?.close();
//   }

//   return Response.json({ message: newMessage });
// }
