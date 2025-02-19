// Task 1 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// const app = express();
// app.use(express.json());
// const port = 3002;

// function getEventBycategory(category:string) : Event[] {
//   const filteredEvents = events.filter((event) => event.category === category);
//   return filteredEvents;
//  }

//  function getAllEvents() : Event[]{
//    return events;
//  }

//  function getEventByID(id : number) : Event | undefined {
//    return events.find((event) => event.id === id);
//  }

//  function addEvent(newEvent : Event) : Event {
//    newEvent.id = events.length 1;
//    events.push(newEvent);
//    return newEvent;
//  }

//  app.get("/", (req: Request, res: Response) => {
//   res.send(events);
// });

//  app.get("/events", (req,res) => {
//    if (req.query.category){
//      const category = req.query.category;
//      const filteredEvents = getEventBycategory(category as string);
//      res.json(filteredEvents);
//    } else {
//      res.json(getAllEvents);
//    }
//  })

//  app.get("/events/:id", (req,res)=>{
//    const id = parseInt(req.params.id);
//    const event = getEventByID(id);
//    if (event){
//      res.json(event);
//    } else {
//      res.status(404).send("Event not found");
//    }
//  })

//  app.post("/events", (req,res)=>{
//    const newEvent : Event = req.body;
//    addEvent(newEvent);
//    res.json(newEvent);
//  });

//  app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// // Task 2 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from "./service/eventService";
// import { addEvent, getAllEvents, getEventByCategory, getEventByID } from "./service/eventService";
// // import { addEvent, getAllEvents as allEvent, getEventByCategory, getEventByID } from "./service/eventService"; // as เป็นการเปลี่ยนชื่อ function ที่ import มา

// import add from "./functions";
// const app = express();
// app.use(express.json());
// const port = 3002;

//  app.get("/", (req: Request, res: Response) => {
//   res.send(getAllEvents());
//   res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
// });

//  app.get("/events", (req,res) => {
//    if (req.query.category){
//      const category = req.query.category;
//      const filteredEvents = getEventByCategory(category as string);
//      res.json(filteredEvents);
//    } else {
//      res.json(getAllEvents);
//    }
//  })

//  app.get("/events/:id", (req,res)=>{
//    const id = parseInt(req.params.id);
//    const event = getEventByID(id);
//    if (event){
//      res.json(event);
//    } else {
//      res.status(404).send("Event not found");
//    }
//  })

//  app.post("/events", (req,res)=>{
//    const newEvent : Event = req.body;
//    addEvent(newEvent);
//    res.json(newEvent);
//  });

//  app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// Task 3 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from "./service/eventService";
// import { addEvent, getAllEvents, getEventByCategory, getEventByID } from "./service/eventService";
// // import { addEvent, getAllEvents as allEvent, getEventByCategory, getEventByID } from "./service/eventService"; // as เป็นการเปลี่ยนชื่อ function ที่ import มา

// import add from "./functions";
// const app = express();
// app.use(express.json());
// const port = 3002;

//  app.get("/", (req: Request, res: Response) => {
//   res.send(getAllEvents());
//   res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
// });

//  app.get("/events", async (req,res) => {
//    if (req.query.category){
//      const category = req.query.category;
//      const filteredEvents = await getEventByCategory(category as string);
//      res.json(filteredEvents);
//    } else {
//      res.json(await getAllEvents);
//    }
//  })

//  app.get("/events/:id", async (req,res)=>{
//    const id = parseInt(req.params.id);
//    const event = await getEventByID(id);
//    if (event){
//      res.json(event);
//    } else {
//      res.status(404).send("Event not found");
//    }
//  })

//  app.post("/events", async (req,res)=>{
//    const newEvent : Event = req.body;
//    await addEvent(newEvent);
//    res.json(newEvent);
//  });

//  app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// Task 4 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from "./models/event";
// import { addEvent, getAllEvents, getEventByCategory, getEventById } from "./repository/eventRepositoryDb";

// import add from "./functions";
// const app = express();
// app.use(express.json());
// const port = 3002;

//  app.get("/", async (req: Request, res: Response) => {
//   res.send(await getAllEvents());
// });

//  app.get("/add", (req: Request, res: Response) => {
//   res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
// });

//  app.get("/events", async (req,res) => {
//    if (req.query.category){
//      const category = req.query.category;
//      const filteredEvents = await getEventByCategory(category as string);
//      res.json(filteredEvents);
//    } else {
//      res.json(await getAllEvents());
//    }
//  })

//  app.get("/events/:id", async (req,res)=>{
//    const id = parseInt(req.params.id);
//    const event = await getEventById(id);
//    if (event){
//      res.json(event);
//    } else {
//      res.status(404).send("Event not found");
//    }
//  })

//  app.post("/events", async (req,res)=>{
//    const newEvent : Event = req.body;
//    await addEvent(newEvent);
//    res.json(newEvent);
//  });

//  app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// import multer from 'multer';
// import { uploadFile } from './service/uploadFileService';

// const upload = multer({ storage: multer.memoryStorage() });
// app.post('/upload', upload.single('file'), async (req: any, res: any) => {
//   try {

// const file = req.file;
// if (!file) {
// return res.status(400).send('No file uploaded.');
// }
// const bucket = 'image';
// const filePath = `uploads/${file.originalname}`;
// await uploadFile(bucket, filePath, file);
// res.status(200).send('File uploaded successfully.');
//   } catch (error) {
//     res.status(500).send('Error uploading file.');
//   }
// });

// Task 10 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from "./models/event";
// import { addEvent, getAllEvents, getEventByCategory, getEventById } from "./repository/eventRepositoryDb";

// import add from "./functions";
// const app = express();
// app.use(express.json());
// const port = 3002;

//  app.get("/", async (req: Request, res: Response) => {
//   res.send(await getAllEvents());
// });

//  app.get("/add", (req: Request, res: Response) => {
//   res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
// });

//  app.get("/events", async (req,res) => {
//    if (req.query.category){
//      const category = req.query.category;
//      const filteredEvents = await getEventByCategory(category as string);
//      res.json(filteredEvents);
//    } else {
//      res.json(await getAllEvents());
//    }
//  })

//  app.get("/events/:id", async (req,res)=>{
//    const id = parseInt(req.params.id);
//    const event = await getEventById(id);
//    if (event){
//      res.json(event);
//    } else {
//      res.status(404).send("Event not found");
//    }
//  })

//  app.post("/events", async (req,res)=>{
//    const newEvent : Event = req.body;
//    await addEvent(newEvent);
//    res.json(newEvent);
//  });

//  app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// import multer from 'multer';
// import { uploadFile } from './service/uploadFileService';

// const upload = multer({ storage: multer.memoryStorage() });
// app.post('/upload', upload.single('file'), async (req: any, res: any) => {
//   try {

// const file = req.file;
// if (!file) {
// return res.status(400).send('No file uploaded.');
// }
// const bucket = 'image';
// const filePath = `uploads/${file.originalname}`;
// const ouputUrl = await uploadFile(bucket, filePath, file);
// res.status(200).send(ouputUrl);
//    } catch (error) {
//     res.status(500).send('Error uploading file.');
//   }
// });

// Task 11 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from "./models/event";
// import { addEvent, getAllEvents, getEventByCategory, getEventById } from "./repository/eventRepositoryDb";

// import add from "./functions";
// const app = express();
// app.use(express.json());
// const port = 3002;

//  app.get("/", async (req: Request, res: Response) => {
//   res.send(await getAllEvents());
// });

//  app.get("/add", (req: Request, res: Response) => {
//   res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
// });

//  app.get("/events", async (req,res) => {
//    if (req.query.category){
//      const category = req.query.category;
//      const filteredEvents = await getEventByCategory(category as string);
//      res.json(filteredEvents);
//    } else {
//      res.json(await getAllEvents());
//    }
//  })

//  app.get("/events/:id", async (req,res)=>{
//    const id = parseInt(req.params.id);
//    const event = await getEventById(id);
//    if (event){
//      res.json(event);
//    } else {
//      res.status(404).send("Event not found");
//    }
//  })

//  app.post("/events", async (req,res)=>{
//    const newEvent : Event = req.body;
//    await addEvent(newEvent);
//    res.json(newEvent);
//  });

//  app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// import multer from 'multer';
// import { uploadFile } from './service/uploadFileService';

// const upload = multer({ storage: multer.memoryStorage() });
// app.post('/upload', upload.single('file'), async (req: any, res: any) => {
//   try {

// const file = req.file;
// if (!file) {
// return res.status(400).send('No file uploaded.');
// }
// const bucket = 'image';
// const filePath = `uploads`;
// const ouputUrl = await uploadFile(bucket, filePath, file);
// res.status(200).send(ouputUrl);
//    } catch (error) {
//     res.status(500).send('Error uploading file.');
//   }
// });

// Task 12 Lab3 ------------------------------------------------------
// import express, { Request, Response } from "express";
// import type { Event } from "./models/event";
// import {
//   addEvent,
//   getAllEvents,
//   getEventByCategory,
//   getEventById,
// } from "./repository/eventRepositoryDb";

// import add from "./functions";
// const app = express();
// app.use(express.json());
// const port = 3002;

// app.get("/", async (req: Request, res: Response) => {
//   res.send(await getAllEvents());
// });

// app.get("/add", (req: Request, res: Response) => {
//   res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
// });

// app.get("/events", async (req, res) => {
//   if (req.query.category) {
//     const category = req.query.category;
//     const filteredEvents = await getEventByCategory(category as string);
//     res.json(filteredEvents);
//   } else {
//     res.json(await getAllEvents());
//   }
// });

// app.get("/events/:id", async (req, res) => {
//   const id = parseInt(req.params.id);
//   const event = await getEventById(id);
//   if (event) {
//     res.json(event);
//   } else {
//     res.status(404).send("Event not found");
//   }
// });

// app.post("/events", async (req, res) => {
//   const newEvent: Event = req.body;
//   await addEvent(newEvent);
//   res.json(newEvent);
// });

// app.listen(port, () => {
//   console.log(`App listening at http : //localhost:${port}`);
// });

// import dotenv from "dotenv";
// import multer from "multer";
// import { uploadFile } from "./service/uploadFileService";
// dotenv.config();

// const upload = multer({ storage: multer.memoryStorage() });
// app.post("/upload", upload.single("file"), async (req: any, res: any) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).send("No file uploaded.");
//     }
//     const bucket = process.env.SUPABASE_BUCKET_NAME;
//     const filePath = process.env.UPLOAD_DIR;
//     if (!bucket || !filePath) {
//       return res.status(500).send("Bucket name or file path not configured.");
//     }

//     const ouputUrl = await uploadFile(bucket, filePath, file);
//     res.status(200).send(ouputUrl);
//   } catch (error) {
//     res.status(500).send("Error uploading file.");
//   }
// });

// Task 13 Lab3 ------------------------------------------------------
import dotenv from 'dotenv';
import express from "express";
import multer from 'multer';
import eventRoute from './routes/eventRoute';
import { uploadFile } from "./service/uploadFileService";
dotenv.config(); 
const app = express();
app.use(express.json());
const port = 3002;

app.use('/events',eventRoute);

app.listen(port, () => {
  console.log(`App listening at http : //localhost:${port}`);
});

const upload = multer({ storage: multer.memoryStorage() });
app.post("/upload", upload.single("file"), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }
    const bucket = process.env.SUPABASE_BUCKET_NAME;
    const filePath = process.env.UPLOAD_DIR;
    if (!bucket || !filePath) {
      return res.status(500).send("Bucket name or file path not configured.");
    }

    const ouputUrl = await uploadFile(bucket, filePath, file);
    res.status(200).send(ouputUrl);
  } catch (error) {
    res.status(500).send("Error uploading file.");
  }
});
