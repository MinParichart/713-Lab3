export function getEventByCategory(category:string) : Event[] {
  const filteredEvents = events.filter((event) => event.category === category); 
  return filteredEvents;
 }
 
export function getAllEvents() : Event[]{
   return events; 
 }
 
export function getEventByID(id : number) : Event | undefined { 
   return events.find((event) => event.id === id); 
 }
 
 export function addEvent(newEvent : Event) : Event { 
   newEvent.id = events.length +1; 
   events.push(newEvent); 
   return newEvent; 
 }

export interface Event {
    id: number;
    category: string;
    title: string;
    decription: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
  }
  
const events : Event[] = [
    {
      id: 1,
      category: "Music",
      title: "Concert",
      decription: "A live concert",
      location: "London",
      date: "2021-07-01",
      time: "19:00",
      petsAllowed: false,
      organizer: "Live Nation",
    },
    {
      id: 2,
      category: "Music",
      title: "Festival",
      decription: "A music festival",
      location: "Manchester",
      date: "2021-07-15",
      time: "12:00",
      petsAllowed: true,
      organizer: "Festival Republic",
    },
    {
      id: 3,
      category: "Music",
      title: "Gig",
      decription: "A gig",
      location: "Birmingham",
      date: "2021-07-30",
      time: "20:00",
      petsAllowed: true,
      organizer: "Academy Music Group",
    },
    {
      id: 4,
      category: "Sports",
      title: "Football Match",
      decription: "A live football match",
      location: "London",
      date: "2021-07-01",
      time: "19:00",
      petsAllowed: false,
      organizer: "Premier League",
    },
    {
      id: 5,
      category: "Music",
      title: "Festival",
      decription: "A music festival",
      location: "Manchester",
      date: "2021-07-15",
      time: "12:00",
      petsAllowed: true,
      organizer: "Festival Republic",
    },
    {
      id: 6,
      category: "Music",
      title: "Gig",
      decription: "A gig",
      location: "Birmingham",
      date: "2021-07-30",
      time: "20:00",
      petsAllowed: true,
      organizer: "Academy Music Group",
    },
  ];
  
