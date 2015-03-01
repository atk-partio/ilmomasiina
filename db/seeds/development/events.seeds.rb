Event.seed(:id,
  {
    id: 1,
    name: "Harjannostajaiset",
    description: (<<-DESCRIPTION.strip_heredoc),
      Tervetuloa Athenen sukulaissitseille

      Näillä sitseillä esitellään sukulaisille athenelaista sitsikulttuuria!
      Jokainen athenelainen saa tuoda mukanaan kaksi (2) sukulaista tai
      sukulaissieluansa. Huomaathan, että myös sukulaisten on ilmottauduttava
      ilmomasiinassa!

      Ilmottautuminen sitseille avautuu ystävänpäivänä 14.2. klo 12. Paikkoja on
      sitseille varattu 50:lle athenelaiselle sekä heidän sukulaisilleen. Jos 150
      sitsipaikkaa ei täyty 50:stä ensimmäisestä athenelaisesta sukulaisineen,
      sitsit täytetään varasijoille ilmottautuneista.

      HUOM! Ilmon sulkeuduttua ilmottautuminen on sitova!
    DESCRIPTION
    image: "http://placehold.it/1024x300",
    date: Time.parse("10.10.2014 18:00"),
    registration_begins_at: Time.parse("1.9.2014 12:00"),
    registration_ends_at: Time.parse("3.10.2014 23:00"),
    questions: [
      Question.new({
        event_id: 1,
        name: 'Kysymys 1'
      }),
      Question.new({
        event_id: 1,
        name: 'Kysymys 2'
      }),
    ]
  },
  {
    id: 2,
    name: "Joulujuhla",
    description: (<<-DESCRIPTION.strip_heredoc),
      Tervetuloa Athenen sukulaissitseille

      Näillä sitseillä esitellään sukulaisille athenelaista sitsikulttuuria!
      Jokainen athenelainen saa tuoda mukanaan kaksi (2) sukulaista tai
      sukulaissieluansa. Huomaathan, että myös sukulaisten on ilmottauduttava
      ilmomasiinassa!

      Ilmottautuminen sitseille avautuu ystävänpäivänä 14.2. klo 12. Paikkoja on
      sitseille varattu 50:lle athenelaiselle sekä heidän sukulaisilleen. Jos 150
      sitsipaikkaa ei täyty 50:stä ensimmäisestä athenelaisesta sukulaisineen,
      sitsit täytetään varasijoille ilmottautuneista.

      HUOM! Ilmon sulkeuduttua ilmottautuminen on sitova!
    DESCRIPTION
    image: "http://placehold.it/1024x300/f00/f0f",
    date: Time.parse("7.1.2014 18:00"),
    registration_begins_at: Time.parse("24.12.2013 00:00"),
    registration_ends_at: Time.parse("1.1.2014 00:00"),
    questions: [
      Question.new({
        event_id: 2,
        name: 'Kysymys A'
      }),
      Question.new({
        event_id: 2,
        name: 'Kysymys B'
      }),
    ]
  }
)
