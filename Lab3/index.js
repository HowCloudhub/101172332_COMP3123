var http = require("http");
const employees = require("./Employee");

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Send a JSON response
function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8"
    });
    res.end(JSON.stringify(data));
}

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.writeHead(405, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === "/") {
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return;
        }

        if (req.url === "/employee") {
            sendJson(res, 200, employees);
            return;
        }

        if (req.url === "/employee/names") {
            const names = employees
                .map(employee => `${employee.firstName} ${employee.lastName}`)
                .sort((a, b) => a.localeCompare(b));

            sendJson(res, 200, names);
            return;
        }

        if (req.url === "/employee/totalsalary") {
            const totalSalary = employees.reduce(
                (total, employee) => total + employee.Salary,
                0
            );

            sendJson(res, 200, { total_salary: totalSalary });
            return;
        }

        res.writeHead(404, {
            "Content-Type": "application/json; charset=utf-8"
        });
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});