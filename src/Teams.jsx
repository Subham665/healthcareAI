import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import TeamMemberCard from "./teamMember";

const Teams = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Team</h2>
      <TeamMemberContainer>
        <TeamMemberCard
          name="John Doe"
          position="CEO"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        <TeamMemberCard
          name="Jane Smith"
          position="Designer"
          imageUrl="./images/team-photo.jpeg"
        />
        
        {/* Add more TeamMemberCard components for other team members */}
      </TeamMemberContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adjust the spacing as needed */
  flex-wrap: wrap;
`;

export default Teams;
