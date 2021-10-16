package repositories;

import model.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TaskRepository  extends JpaRepository<Task, Long> {

    @Query("select t from Task t where t.folder.id = :folderId and t.user.id = :userId")
    public List<Task> getTaskByFolderId(@Param("folderId") Long folderId, @Param("userId") Long userId);

    @Modifying
    @Query("delete from Task t where t.folder.id = :folderId")
    @Transactional
    void deleteTaskByFolderId(@Param("folderId")Long folderId);

    @Modifying
    @Query("UPDATE Task t set t.completed = :completed where t.id= :taskId")
    @Transactional
    void updateCompleted(@Param("taskId") Long taskId,
                         @Param("completed") Boolean completed);

    @Modifying
    @Query("UPDATE Task t set t.description = :description where t.id= :taskId")
    @Transactional
    void updateDescription(@Param("taskId") Long taskId,
                         @Param("description") String description );
}
