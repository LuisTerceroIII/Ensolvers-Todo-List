package model.entities;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="folder_tasks", schema="public")
public class FolderTasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_folder_tasks", columnDefinition = "serial")
    private Long id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "id_user")
    private User user;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "folder", cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH,
            CascadeType.REFRESH })
    List<Task> tasks = new ArrayList<>();

    public FolderTasks() { }

    public FolderTasks(User user, String name) {
        this.user = user;
        this.name = name;
    }

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public Long getUserId() {
        return this.user.getId();
    }
    @Override
    public String toString() {
        return "FolderTasks{" +
                "id=" + id +
                ", user=" + user.getName() +
                ", name='" + name + '\'' +
                '}';
    }
}
