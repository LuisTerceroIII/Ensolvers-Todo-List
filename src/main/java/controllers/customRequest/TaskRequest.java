package controllers.customRequest;

public class TaskRequest {

    private String description;
    private Boolean completed;

    public TaskRequest(String description, Boolean completed) {
        this.description = description;
        this.completed = completed;
    }

    public TaskRequest(String description) {
        this.description = description;
    }

    public TaskRequest(Boolean completed) {
        this.completed = completed;
    }

    public TaskRequest() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean isCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "TaskRequest{" +
                "description='" + description + '\'' +
                ", completed=" + completed +
                '}';
    }
}
