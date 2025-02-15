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
//    newEvent.id = events.length +1; 
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

// Task 2 Lab3 ------------------------------------------------------
import express, { Request, Response } from "express";
import add from "./functions";
import type { Event } from "./service/eventService";
import { addEvent, getAllEvents, getEventByCategory, getEventByID } from "./service/eventService";

const app = express();
app.use(express.json());
const port = 3002;

 app.get("/", (req: Request, res: Response) => {
  res.send(getAllEvents());
  res.send(add(5, 3)); // เอามาใส่เฉยๆ ให้เห็นว่าใส่ function ได้
});

 app.get("/events", (req,res) => { 
   if (req.query.category){ 
     const category = req.query.category;
     const filteredEvents = getEventByCategory(category as string); 
     res.json(filteredEvents);
   } else { 
     res.json(getAllEvents); 
   }
 })
 
 app.get("/events/:id", (req,res)=>{ 
   const id = parseInt(req.params.id); 
   const event = getEventByID(id); 
   if (event){ 
     res.json(event); 
   } else { 
     res.status(404).send("Event not found"); 
   }
 })
 
 app.post("/events", (req,res)=>{ 
   const newEvent : Event = req.body; 
   addEvent(newEvent); 
   res.json(newEvent); 
 }); 

 app.listen(port, () => {
  console.log(`App listening at http : //localhost:${port}`);
});
 


