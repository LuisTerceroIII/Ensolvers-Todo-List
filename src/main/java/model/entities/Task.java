package model.entities;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="task", schema="public")
public class Task {

    public Task() {
    }

    public Task(User user, FolderTasks folder, String description, boolean completed) {
        this.user = user;
        this.folder = folder;
        this.description = description;
        this.completed = completed;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_task",columnDefinition = "serial")
    private Long id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_user")
    private User user;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_folder")
    private FolderTasks folder;

    @Column(name="description")
    private String description;

    @Column(name = "completed")
    private boolean completed;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public FolderTasks getFolder() {
        return folder;
    }

    public void setFolder(FolderTasks folder) {
        this.folder = folder;
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

    public Long getFolderId() {
        return this.getFolder().getId();
    }

    public Long getUserId() {
        return this.getUser().getId();
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", user=" + user.getName() +
                ", folder=" + folder.getName() +
                ", description='" + description + '\'' +
                ", completed=" + completed +
                '}';
    }
}
