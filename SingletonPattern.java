// Traditional Singleton Pattern

public class DatabaseConnection {
    private static DatabaseConnection instance;

private DatabaseConnection() {
        System.out.println("Database connection established.");
    }
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}

// Double-checked locking

public class DatabaseConnection {
    private static volatile DatabaseConnection instance;

private DatabaseConnection() {
        System.out.println("Database connection established.");
    }
    public static DatabaseConnection getInstance() {
        if (instance == null) { // First check
            synchronized (DatabaseConnection.class) { // Lock
                if (instance == null) { // Second check
                    instance = new DatabaseConnection();
                }
            }
        }
        return instance;
    }
}

// Eager intiitialization

public class DatabaseConnection {
    private static final DatabaseConnection instance = new DatabaseConnection();

private DatabaseConnection() {
        System.out.println("Database connection established.");
    }
    public static DatabaseConnection getInstance() {
        return instance;
    }
}