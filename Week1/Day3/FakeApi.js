
class ApiError extends Error {
    constructor(message, code = "API_ERROR") {
        super(message);
        this.name = "ApiError";
        this.code = code;
    }
}

//API request
function fakeApi(data, apiName) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 500;
        setTimeout(() => {
            console.log(`${apiName} responded after ${delay}ms`);
            if (Math.random() < 0.3) {
                reject(
                    new ApiError(
                        `${apiName} failed`,
                        "REQUEST_FAILED"
                    )
                );
            } else {
                resolve(data);
            }
        }, delay);
    });
}

//Created Users API
function getUsers() {
    const users = [
        { id: 1, name: "Ravi", department: "IT" },
        { id: 2, name: "Priya", department: "HR" },
        { id: 3, name: "Arjun", department: "Sales" }
    ];

    return fakeApi(users, "Users API");
}

//Created Orders API
function getOrders() {
    const orders = [
        { id: 101, item: "Laptop", amount: 550000 },
        { id: 102, item: "Mouse", amount: 800 },
        { id: 103, item: "Keyboard", amount: 2000 }
    ];
    return fakeApi(orders, "Orders API");
}

//failed request
async function retryRequest(apiFunction, maxAttempts = 3) {
    let lastError;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt} of ${maxAttempts}`);
            return await apiFunction();
        } catch (error) {
            lastError = error;
            console.log(
                `Attempt ${attempt} failed: ${error.message}`
            );
        }
    }
    throw new ApiError(
        `Request failed after ${maxAttempts} attempts. ` +
        `Last error: ${lastError.message}`,
        "MAX_RETRIES_EXCEEDED"
    );
}

//Both APIs Parallel
async function loadDashboard() {
    console.log("Loading dashboard...\n");
    console.time("Total loading time");

    try {
        const [users, orders] = await Promise.all([
            retryRequest(getUsers, 3),
            retryRequest(getOrders, 3)
        ]);

        console.log("\n===== USERS =====");
        console.log(users);

        console.log("\n===== ORDERS =====");
        console.log(orders);

        //total amount
        const totalAmount = orders.reduce(
            (total, order) => total + order.amount,
            0
        );

        console.log("\nTotal order amount: ₹" + totalAmount);
        console.log("Dashboard loaded successfully!");

    } catch (error) {
        console.error("\nDashboard error:", error.message);
        console.error("Error code:", error.code || "UNKNOWN_ERROR");

    } finally {
        console.timeEnd("Total loading time");
        console.log("Dashboard request completed.");
    }
}

// Step 7: Start the application
loadDashboard();
