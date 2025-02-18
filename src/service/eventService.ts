// // Task 2 Lab3 ------------------------------------------------------
// export function getEventByCategory(category:string) : Event[] {
//   const filteredEvents = events.filter((event) => event.category === category);
//   return filteredEvents;
//  }

// export function getAllEvents() : Event[]{
//    return events;
//  }

// export function getEventByID(id : number) : Event | undefined {
//    return events.find((event) => event.id === id);
//  }

//  export function addEvent(newEvent : Event) : Event {
//    newEvent.id = events.length +1;
//    events.push(newEvent);
//    return newEvent;
//  }

// export interface Event {
//     id: number;
//     category: string;
//     title: string;
//     decription: string;
//     location: string;
//     date: string;
//     time: string;
//     petsAllowed: boolean;
//     organizer: string;
//   }

// const events : Event[] = [
//     {
//       id: 1,
//       category: "Music",
//       title: "Concert",
//       decription: "A live concert",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Live Nation",
//     },
//     {
//       id: 2,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 3,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//     {
//       id: 4,
//       category: "Sports",
//       title: "Football Match",
//       decription: "A live football match",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Premier League",
//     },
//     {
//       id: 5,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 6,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//   ];

// Task 3 Lab3 ------------------------------------------------------
// export function getEventByCategory(category:string) : Promise<Event[]> {
//   const filteredEvents = events.filter((event) => event.category === category);
//   return Promise.resolve(filteredEvents);
//  }

// export function getAllEvents() : Promise<Event[]>{
//    return Promise.resolve(events);
//  }

// export function getEventByID(id : number) : Promise<Event| undefined> {
//    return Promise.resolve(events.find((event) => event.id === id));
//  }

//  export function addEvent(newEvent : Event) : Promise<Event> {
//    newEvent.id = events.length +1;
//    events.push(newEvent);
//    return Promise.resolve(newEvent);
//  }

// export interface Event {
//     id: number;
//     category: string;
//     title: string;
//     decription: string;
//     location: string;
//     date: string;
//     time: string;
//     petsAllowed: boolean;
//     organizer: string;
//   }

// const events : Event[] = [
//     {
//       id: 1,
//       category: "Music",
//       title: "Concert",
//       decription: "A live concert",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Live Nation",
//     },
//     {
//       id: 2,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 3,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//     {
//       id: 4,
//       category: "Sports",
//       title: "Football Match",
//       decription: "A live football match",
//       location: "London",
//       date: "2021-07-01",
//       time: "19:00",
//       petsAllowed: false,
//       organizer: "Premier League",
//     },
//     {
//       id: 5,
//       category: "Music",
//       title: "Festival",
//       decription: "A music festival",
//       location: "Manchester",
//       date: "2021-07-15",
//       time: "12:00",
//       petsAllowed: true,
//       organizer: "Festival Republic",
//     },
//     {
//       id: 6,
//       category: "Music",
//       title: "Gig",
//       decription: "A gig",
//       location: "Birmingham",
//       date: "2021-07-30",
//       time: "20:00",
//       petsAllowed: true,
//       organizer: "Academy Music Group",
//     },
//   ];

// Task 4 Lab3 ------------------------------------------------------
// import type { Event } from "../models/event";
// import {
//     addEvent as addNewEvent,
//     getAllEvents as allEvents,
//     getEventByID as eventById
// } from "../repository/eventRepository";

// export function getEventByCategory(category: string): Promise<Event[]> {
//   return getEventByCategory(category);
// }

// export function getAllEvents(): Promise<Event[]> {
//   return allEvents();
// }

// export function getEventById(id: number): Promise<Event | undefined> {
//   return eventById(id);
// }

// export function addEvent(newEvent: Event): Promise<Event> {
//  return addNewEvent(newEvent);
// }
import type { Event } from "../models/event";
// import * as repo from "../repository/eventRepository";
import * as repo from "../repository/eventRepositoryDb";

export function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}
export function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}
export function getEventById(id: number): Promise<Event | undefined> {
  return repo.getEventById(id);
}
export function addEvent(newEvent: Event): Promise<Event> {
  return repo.addEvent(newEvent);
}

