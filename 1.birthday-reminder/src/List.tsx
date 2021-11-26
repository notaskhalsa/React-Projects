import React from "react";

const List = (props: any) => {
  const { people } = props;
  return (
    <div>
      {people.map(
        (person: { id: number; name: string; age: number; image: string }) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                  <h4>{name}</h4>
                  <p>{age}</p>
              </div>
            </article>
          );
        }
      )}
    </div>
  );
};

export default List;
