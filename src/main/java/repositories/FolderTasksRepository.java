package repositories;

import model.entities.FolderTasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface FolderTasksRepository extends JpaRepository<FolderTasks, Long> {

    @Query("select f from FolderTasks f where f.user.id = :id_user")
    List<FolderTasks> getAllByUserId(@Param("id_user") Long id_user);

    @Modifying
    @Query("UPDATE FolderTasks f set f.name = :name where f.id= :folderId")
    @Transactional
    void changeName(@Param("folderId") Long folderId, @Param("name") String name);

}
