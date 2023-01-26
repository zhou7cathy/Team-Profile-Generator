function bodyTemplate() {
    const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <div class="container">
            managerReplaceable
            engineerReplaceable
            internReplaceable
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>`;
    
    return template;
}

function managerTemplate() {
    const template = `  
                <div class="card manager" style="width: 18rem;">
                    <div class="card-header">
                        name: nameReplaceable
                        position: Manager
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: idReplaceable</li>
                        <li class="list-group-item">Email: emailReplaceable</li>
                        <li class="list-group-item">Office number: officeNumberReplaceable</li>
                    </ul>
                </div>`;    
    
    return template;
}

function engineerTemplate() {
    const template = `
            <div class="card engineer" style="width: 18rem;">
                <div class="card-header">
                    name: nameReplaceable
                    position: Engineer
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: idReplaceable</li>
                    <li class="list-group-item">Email: emailReplaceable</li>
                    <li class="list-group-item">GitHub: gitHubReplaceable</li>
                </ul>
            </div>`;
    
    return template;
}

function internTemplate() {
    const template = ` 
        <div class="card intern" style="width: 18rem;">
            <div class="card-header">
                name: nameReplaceable
                position: Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: idReplaceable</li>
                <li class="list-group-item">Email: emailReplaceable</li>
                <li class="list-group-item">School: schoolReplaceable</li>
            </ul>
        </div>`;
    
    return template;
}

module.exports = {
    bodyTemplate,
    internTemplate,
    managerTemplate,
    engineerTemplate,
  };
  