import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageDataService {

  constructor() { }


  en = [
    {
      "frontendDeveloper": "Frontend Developer",
      "sendMessage": "Send a message",
      "scrollDown": "Scroll Down",
      "aboutMe": {
        "title": "About Me",
        "description": "I'm a Front-end developer from Reutlingen, Germany, with a passion for turning creative concepts and business visions into digital reality. Eager to advance my career in web development, I'm seeking opportunities in junior web developer roles. Should my skills align with your project needs, please feel free to reach out to me!"
      },
      "letsTalk": "Let's talk",
      "mySkills": "My skills",
      "portfolio": {
        "intro": "Feel free to try out my latest development projects...",
        "join": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        "elPolloLoco": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
      },
      "sayHi": "Say Hi",
      "discussProject": "Want to discuss a new Project? Say hello! Let's discuss your ideas and make it happen",
      "yourName": "Your name",
      "yourEmail": "Your email",
      "yourMessage": "Your message",
      "privacyPolicyAgreement": "I've read the privacy policy and agree to the processing of my data as outlined.",
      "sendButton": "Send message",
      "legalNotice": "Legal notice",
      "aboutMeShort": "About me",
      "mySkillsShort": "My Skills"
    }
  ]


  de = [
    {
      "frontendDeveloper": "Frontend-Entwickler",
      "sendMessage": "Nachricht senden",
      "scrollDown": "Nach unten scrollen",
      "aboutMe": {
        "title": "Über mich",
        "description": "Ich bin ein Frontend-Entwickler aus Reutlingen, Deutschland, mit einer Leidenschaft dafür, kreative Konzepte und Geschäftsvisionen in digitale Realität umzusetzen. Ich bin bestrebt, meine Karriere in der Webentwicklung voranzutreiben und suche Möglichkeiten in Rollen als Junior-Webentwickler. Sollten meine Fähigkeiten den Anforderungen Ihres Projekts entsprechen, zögern Sie bitte nicht, mich zu kontaktieren!"
      },
      "letsTalk": "Lass uns reden",
      "mySkills": "Meine Fähigkeiten",
      "portfolio": {
        "intro": "Fühlen Sie sich frei, meine neuesten Entwicklungsprojekte auszuprobieren...",
        "join": "Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.",
        "elPolloLoco": "Springen, laufen und werfen Spiel basierend auf dem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen."
      },
      "sayHi": "Sag Hallo",
      "discussProject": "Möchten Sie ein neues Projekt besprechen? Sagen Sie Hallo! Lassen Sie uns über Ihre Ideen sprechen und sie verwirklichen",
      "yourName": "Ihr Name",
      "yourEmail": "Ihre E-Mail",
      "yourMessage": "Ihre Nachricht",
      "privacyPolicyAgreement": "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie dargelegt zu.",
      "sendButton": "Nachricht senden",
      "legalNotice": "Impressum",
      "aboutMeShort": "Über mich",
      "mySkillsShort": "Meine Fähigkeiten"
    }
  ]
}
