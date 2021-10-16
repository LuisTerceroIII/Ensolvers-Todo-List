package controllers.customRequest;

public class FolderRequest {

    private String name;

    public FolderRequest() {}

    public FolderRequest(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "FolderRequest{" +
                "name='" + name +
                " }";
    }
}
