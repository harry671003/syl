# Syl or Sylphrena
A spren without a body or a mind - in other words she's just a bot.

### Who is syl? 
- Name comes from the character in the novel Stormlight Archives
- A personal assistant.
- The idea is not to build another Alexa. This is a side project. Main goal is to learn new things. 

### Handling accounts
- Syl should be able to authenticate with different services. 
- Handling secrets or tokens securely. 
- Store encrypted data in DB

### Skills
Skills should be extensible
- Keeping track of stats in users personal website (loc from github and VSO, Days of working out, total kilometers run from garmin etc) 
- Setting reminders
- Keeping track of goals, mission statements and stuff.

### Connectors
- Accounts should be independent of skills.
- Connectors can connect to different services like VSO, github, Garmin, Uber etc. 
- Connectors should be divided into categories and each connector in a category should have a common interface. Eg. Food delivery, Source Control (github, VSO, bitbucket)
- Connectors should be separate packages. As in separate repository. Ability to install connectors using package management.
