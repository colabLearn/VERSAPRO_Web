import React from 'react';
import { Card } from 'antd';
import '../components_css/team.css';

const team = [
  {
    image_url: "/images/MD_CEO.jpg",
    profile_link: "/Tunji-profile-page",
    name: 'Adetunji Adeniran',
    position: "Tech Lead",
  },
  {
    image_url: "/images/diran.jpg",
    profile_link: "/Diran-profile-page",
    name: 'Adediran Adeniran',
    position: "Operations Lead",
  },{
    image_url: "/images/manager.jpg",
    profile_link: "/kenny-profile-page",
    name: 'Kehinde Adeniran',
    position: "Team Manager",
  },
];

const Team = () => {
  const rows = [];
  for (let i = 0; i < team.length; i += 3) {
    rows.push(team.slice(i, i + 3));
  }

  return (
    <table className='team-members'>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((member, memberIndex) => (
              <td key={memberIndex}>
                <Card id='profile-card' hoverable>
                  <div className='profile-div'>
                    <img className='profile-img' src={member.image_url} alt={member.name} />
                    <p className='profile-text'>
                      <a href={member.profile_link} target="_blank" rel="noopener noreferrer">
                        {member.name}
                      </a>
                      <br />
                      {member.position}
                    </p>
                  </div>
                </Card>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Team;
