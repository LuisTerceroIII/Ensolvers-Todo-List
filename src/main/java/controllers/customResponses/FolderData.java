package controllers.customResponses;

public class FolderData {
    private Long idFolder;
    private Long idUser;
    private String name;

    public FolderData() {}

    public FolderData(Long idFolder, Long idUser, String name) {
        this.idFolder = idFolder;
        this.idUser = idUser;
        this.name = name;
    }

    public Long getIdFolder() {
        return idFolder;
    }

    public void setIdFolder(Long idFolder) {
        this.idFolder = idFolder;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "FolderData{" +
                "idFolder=" + idFolder +
                ", idUser=" + idUser +
                ", name='" + name + '\'' +
                '}';
    }
}
