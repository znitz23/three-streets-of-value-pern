const client = require("./client");
const { createSession, getAllSessions } = require("./sessions");
const { createUser } = require("./users");

const dropTables = async () => {
  try {
    console.log("Starting to drop all tables...");
    await client.query(`
    DROP TABLE IF EXISTS sessions;
    DROP TABLE IF EXISTS users;
    `);
    console.log("Finished droppping all tables successfully!");
  } catch (error) {
    console.error("Error dropping tables");
    throw error;
  }
};

async function createTables() {
  console.log("Starting to build tables...");

  try {
    await client.query(`
    
    CREATE TABLE users(
        id SERIAL primary key,
        username VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(255)
        ); 

    CREATE TABLE sessions(
        id SERIAL primary key,
        date TEXT NOT NULL,
        game TEXT NOT NULL,
        day VARCHAR(15) NOT NULL,
        duration NUMERIC(4,2) NOT NULL,
        "buy_in" INTEGER NOT NULL,
        "cash_out" INTEGER NOT NULL,
        notes TEXT,
        username TEXT NOT NULL,
        wl INTEGER NOT NULL
        );
    `);
    console.log(
      "Finished creating all tables successfully! Now, to add some data!"
    );
  } catch (error) {
    console.error("Error creating tables");
    throw error;
  }
}

async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const userToCreate = {
      username: "znitz23",
      password: "ed167919",
    };
    const user = await createUser(userToCreate);
    return user;
  } catch (error) {
    throw error;
  }
}
async function createInitialSessions() {
  console.log("Starting to sessions...");
  try {
    const sessionsToCreate = [
      {
        date: "2023-02-19",
        game: "1-3",
        day: "Tuesday",
        duration: 5.75,
        buy_in: 1000,
        cash_out: 1367,
        notes: "Made too many soft calls preflop",
        username: "znitz23",
        wl: 367,
      },
      {
        date: "2023-02-22",
        game: "1-3",
        day: "Friday",
        duration: 4,
        buy_in: 1200,
        cash_out: 1653,
        notes: "I played great",
        username: "znitz23",
        wl: 453,
      },
      {
        date: "2023-02-27",
        game: "1-3",
        day: "Monday",
        duration: 11,
        buy_in: 1200,
        cash_out: 678,
        notes: "I played great",
        username: "znitz23",
        wl: -522,
      },
      {
        date: "2023-02-29",
        game: "1-3",
        day: "Saturday",
        duration: 8.5,
        buy_in: 1200,
        cash_out: 1719,
        notes: "I played great",
        username: "znitz23",
        wl: 519,
      },
      {
        date: "2023-03-01",
        game: "1-3",
        day: "Wednesday",
        duration: 9.5,
        buy_in: 1200,
        cash_out: 1310,
        notes: "I played great",
        username: "znitz23",
        wl: 110,
      },
      {
        date: "2023-03-04",
        game: "1-3",
        day: "Friday",
        duration: 5,
        buy_in: 1200,
        cash_out: 1580,
        notes: "I played great",
        username: "znitz23",
        wl: 380,
      },
      {
        date: "2023-03-10",
        game: "1-3",
        day: "Tuesday",
        duration: 5,
        buy_in: 1200,
        cash_out: 900,
        notes: "I played great",
        username: "znitz23",
        wl: -300,
      },
      {
        date: "2023-03-11",
        game: "1-3",
        day: "Wednesday",
        duration: 10,
        buy_in: 1200,
        cash_out: 2400,
        notes: "I played great",
        username: "znitz23",
        wl: 2300,
      },
      {
        date: "2023-03-14",
        game: "1-3",
        day: "Friday",
        duration: 6,
        buy_in: 1200,
        cash_out: 1487,
        notes: "I played great",
        username: "znitz23",
        wl: 287,
      },
      {
        date: "2023-03-19",
        game: "1-3",
        day: "Sunday",
        duration: 9,
        buy_in: 1200,
        cash_out: 1500,
        notes: "I played great",
        username: "znitz23",
        wl: 300,
      },
      {
        date: "2023-03-22",
        game: "1-3",
        day: "Saturday",
        duration: 10,
        buy_in: 1200,
        cash_out: 1045,
        notes: "I played great",
        username: "znitz23",
        wl: -155,
      },
      {
        date: "2023-04-01",
        game: "1-3",
        day: "Monday",
        duration: 8.25,
        buy_in: 1200,
        cash_out: 1897,
        notes: "I played great",
        username: "znitz23",
        wl: 697,
      },
      {
        date: "2023-04-03",
        game: "1-3",
        day: "Thursday",
        duration: 5,
        buy_in: 1200,
        cash_out: 1687,
        notes: "I played great",
        username: "znitz23",
        wl: 487,
      },
      {
        date: "2023-04-12",
        game: "1-3",
        day: "Friday",
        duration: 9,
        buy_in: 1200,
        cash_out: 725,
        notes: "I played great",
        username: "znitz23",
        wl: -475,
      },
      {
        date: "2023-04-19",
        game: "1-3",
        day: "Monday",
        duration: 8.25,
        buy_in: 1200,
        cash_out: 1762,
        notes: "I played great",
        username: "znitz23",
        wl: 562,
      },
      {
        date: "2023-04-22",
        game: "1-3",
        day: "Friday",
        duration: 5,
        buy_in: 1200,
        cash_out: 1530,
        notes: "I played great",
        username: "znitz23",
        wl: 330,
      },
      {
        date: "2023-04-29",
        game: "1-3",
        day: "Sunday",
        duration: 5.75,
        buy_in: 1200,
        cash_out: 950,
        notes: "I played great",
        username: "znitz23",
        wl: -250,
      },
      {
        date: "2023-04-30",
        game: "1-3",
        day: "THursday",
        duration: 5,
        buy_in: 1200,
        cash_out: 1846,
        notes: "I played great",
        username: "znitz23",
        wl: 646,
      },
      {
        date: "2023-05-1",
        game: "1-3",
        day: "Tuesday",
        duration: 11,
        buy_in: 1200,
        cash_out: 1248,
        notes: "I played great",
        username: "znitz23",
        wl: 48,
      },
      {
        date: "2023-05-07",
        game: "1-3",
        day: "Wednesday",
        duration: 5,
        buy_in: 1200,
        cash_out: 1650,
        notes: "I played great",
        username: "znitz23",
        wl: 450,
      },
      {
        date: "2023-05-19",
        game: "1-3",
        day: "Friday",
        duration: 5.5,
        buy_in: 1200,
        cash_out: 987,
        notes: "I played great",
        username: "znitz23",
        wl: -213,
      },
    ];
    const sessions = await Promise.all(sessionsToCreate.map(createSession));
    console.log("session created");
    console.log("Finished creating session!");
  } catch (error) {
    console.error("Error creating session!");
    throw error;
  }
}

const rebuildDB = async () => {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialSessions();
    await getAllSessions();
  } catch (error) {
    console.error("Error during rebuildDB", error);
    throw error;
  } finally {
    await client.end();
    console.log("Database has been rebuilt, and you're good to go!");
  }
};

rebuildDB();
