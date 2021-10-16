package controllers.customResponses;

public class TaskResponse {

    private Long taskId;
    private Long folderId;
    private Long userId;
    private String description;
    private boolean completed;

    public TaskResponse() {
    }

    public TaskResponse(Long taskId, Long folderId, Long userId, String description, boolean completed) {
        this.taskId = taskId;
        this.folderId = folderId;
        this.userId = userId;
        this.description = description;
        this.completed = completed;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public Long getFolderId() {
        return folderId;
    }

    public void setFolderId(Long folderId) {
        this.folderId = folderId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "TaskResponse{" +
                "taskId=" + taskId +
                ", FolderId=" + folderId +
                ", userId=" + userId +
                ", description='" + description + '\'' +
                ", completed=" + completed +
                '}';
    }
}
