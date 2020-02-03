# My Solution

## Architectural Considerations

- Set up an AWS Redis instance to store the timestamp of the last button press in an in-memory cache. This makes it SUPER fast to load, and is highly available around the globe. The data stored here would contain the ID of the game which is currently in progress. So we'd download GAME_ID and LAST_PRESSED_DATETIME from Redis, and there would ONLY be ONE data record there, which gets overwritten or destroyed and then re-created on each new game start. We'd then use that GAME_ID to go and interact with the other data from AWS RDS.

  - UPDATE re Redis: I tested response time from AWS RDS, and it's about 200ms, which is enough for this test. I'd only implement Redis for a full Production app.

- Store the Player (User) data in a SQL database. Relations are required between PLAYER and GAME, but we don't need it to be AS fast as the game timestamp. This way, we save money, since Redis is expensive, and we don't need MEGA-HIGH performance for this feature. Use AWS RDS.

- A cool feature might be to use Swagger and JSON-API to implement documentation and standardization for API's. This is a "nice-to-have" so it will be implemented last, if at all.

- High speed page load is important, so SSR and high-availability edge caching with Zeit Now and NextJS.

- Because we're ingesting data from external and untrusted sources (DB, User input), we'll use TypeScript and will filter User input.

- Let's keep the code clean, so ESLint and Prettier with compatability for TypeScript. Also, code should adhere to our internal styleguide (STYLE_GUIDE.md). Readability is king.

- Unit and integration tests are required for behavior and services like external wallets.

- Create a visual chart of the architecture of the app and an ERD for DB.

- Use Formik to aid with form creation and maintenance. Read up on it.

## Technical Questions

- What is wei?

- How do you calculate block time? Do you need to see how many blocks have passed in real time? Or can you just use 30 seconds as a value?

## UX: Challenges & Considerations

- User needs to input wallet address before they can press the button. So if the timer is nearly finished, this operation costs the User valuable time. This would become especially bothersome if a User navigated away from the page, and then returned later, only to have to input their wallet info again. We may want to store this info in a COOKIE or in LOCAL STORAGE. Advantage of COOKIE is in-build TTL.

- If we're storing COOKIES or using LOCAL STORAGE, especially for things like financial data, security becomes an issue, and we have to explore potential exploits of COOKIES / LOCAL STORAGE. If the security issues are too severe, we may not be able to store this data locally. Research in this area is needed.

- How will the User know how to use the app? Should we include some type of in-app tutorial that runs on first time use? This could actually appear along-side the form. E.g. "Please enter your ether address", "To play, press button before the countdown reaches Zero". Or maybe this should just be a static part of the app instead of disappearing after the first use?

- There should also be a visual reward for winning, and an info notice for losing. This means that the User would need to be identified somehow (most likely by their ether wallet address), and this ID would need to be related to a GAME_HISTORY table. Hence data is relational and we can't use NoSQL.

- If a User plays, then navigates away from the page, then the game ends, then they return to the page, I'd want there to be a message waiting for them that they won or lost, even if the ETHER has already been paid to them.

- Might be nice to have an email notification on end of game, informing User if they Won or Lost. This would require an email sign-up form though. Best to have this as an optional feature that would be available DURING gameplay.

## UI: Aesthetics

- Mobile-first! So let's do some mock-ups, or at least wireframes.

- I'm sure there are some really cool free CSS animations out there for Buttons. Maybe there's a NPM CSS library for cool but fast animations?

- I'd love for there to be a visual representation of the time left - maybe a ring around the button that reduces as the timer gets closer to zero, and turns from Green to Orange to Red.

- Visual reward for winning, info notice for losing.

- This IS a game, so there's no reason not to have a catchy sound for Click, Win, and Lose. Might be nice to have a Sound ON/OFF button. Page would need to be interactive ASAP, and if these assets took a while to load, they'd come in later.

## Tech Journey

1. USER visits CLIENT via browser and enters Account Info

2. CLIENT sends POST request to SERVER with own webhook endpoint and USER Account Info

3. SERVER records CLIENT webhook endpoint in DB `client_webhook` table

4. SERVER records SERVER webhook endpoint in DB `server_webhook` table

5. SERVER checks DB `current_game` table for current game info

6. If none exists, SERVER creates new game in DB in `game` table, and then uses its id to populate `current_game` table.

7. If game exists, SERVER retrieves `game_id` and `last_pressed`

8. SERVER updates `game` table with new amount, and `player` table with account info

9. SERVER maps through all `client_webhook` endpoints and sends POST request to them with:

- game_id
- last_pressed
- current_amount
- game_status

10. SERVER maps through all `server_webhook` endpoints and sends POST request to them with `last_pressed`, so that they can start the countdown again.

11. If countdown reaches zero, SERVER maps through all the endpoints in `client_webhook` and sends POST to them with game finished info.

12. CLIENT receives data via webhook and displays it to the USER

## User Journey

1. User navigates to URL

2. Form to collect payment information pops up and gates the User from playing until they fill it in. An explanation of why this info is needed should also be available, maybe via a link?

3. User fills in form and proceeds to App

4. User can play, navigate away from page, and return to App (under consideration)

5. When game ends, User gets served a Win/Lose notice if they are on the page, or the next time the return to the App.

6. An email MAY be sent out to the User, though this depends on if we want to implement it or not.

## Database Schema

### PLAYER

player_id (PK)
wallet_in (maybe token?)
wallet_out
email

### GAME

game_id (PK)
winner_user_id
current_amount
game_status

### PLAYER_GAME

player_game_id (PK)
player_id (FK)
game_id (FK)

### WEBHOOK

webhook_id (PK)
endpoint

### CURRENT_GAME

id (PK)
game_id (FK)
last_pressed

## Tech Stack

- AWS Redis
- AWS RDS
- AWS EC2
- Zeit Now
- Zeit NextJS
- Prettier
- TypeScript
- ESLint
- Formik
- Isomorphic-unfetch

## Work Schedule

- Set up public Github repo
- Set up Zeit Now and NextJS, connect to repo, and test deployment pipeline
- Set up Prettier, TypeScript, ESLint
- Create a basic test page
- Implement
