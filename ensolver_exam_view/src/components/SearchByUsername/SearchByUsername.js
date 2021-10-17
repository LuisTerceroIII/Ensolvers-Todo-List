import React from "react";

const SearchByUsername = ({
  handleSubmit,
  onSubmit,
  username,
  register,
  setSubmitButton,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p> Search folders by user name</p>
      <input defaultValue={username} {...register("username")} />
      <button type={"submit"} onClick={() => setSubmitButton("searchUser")}>
        Search
      </button>
    </form>
  );
};

export default SearchByUsername;
