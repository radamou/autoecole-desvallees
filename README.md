#Symfony cloud deployment

##Connect to the cloud account (the same as connect.symfony)

```bash
symfony login 
```
##Init project

```bash
    symfony project:init 
```

##Create totaly new project

```bash
 symfony project:create --title=demo --plan=development
```

##Project deployment

```bash
 symfony deploy
```
##See all projects

```bash
  symfony projects
```

##Open remote connexion

```bash
    symfony open:remote
```
## Delete project by Id

```bash
  symfony project:delete --project=project-id
```