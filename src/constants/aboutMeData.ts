export interface AboutMe {
  value: string;
  title: string;
  content: string;
}

export const aboutMeData: AboutMe[] = [
  {
    value: "item-1",
    title: "Personlighet.",
    content:
      "Jag är relationsinriktad, glad och positiv, open minded, gillar problemlösning, och lite kreativ också.",
  },
  {
    value: "item-2",
    title: "Vad jag gör på min fritid.",
    content:
      "På fritiden gillar jag att utveckla små spelprototyper i Unity och spela datorspel, både för att det är kul och för att få inspiration. Jag umgås gärna med familj, vänner, min sambo och vår hund. Och så försöker jag träna tillräckligt så att kroppen och hjärnan inte blir helt kaputt!",
  },

  {
    value: "item-3",
    title: "Min väg till programmering.",
    content:
      "2019 blev jag intresserad på att göra egna spel och insåg att jag behövde lära mig programmering. Jag började med Unity och C#, och fastnade direkt, det var mycket roligare än jag trodde! Detta ledde sedan till att jag sökte .NET-utveckling på KYH.",
  },
];
