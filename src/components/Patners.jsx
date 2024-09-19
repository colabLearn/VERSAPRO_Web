import '../components_css/partner.css';

const partners = [
    {
      name: "Microsoft",
      badgeImg: "/images/MS_Startups_Celebration_Badge_Dark.png",
    },
  ];

const Partner = () => {
    const rows = [];
  for (let i = 0; i < partners.length; i += 3) {
    rows.push(partners.slice(i, i + 3));
  }
    return (
        <div className="partners-container">
            <table className="partners-list">
               {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((partner, patner_detail) => (
                        <td key={patner_detail}>
                            <img className='partner-badge' src={partner.badgeImg} alt={partner.name} />
                        </td>
                    ))}

                </tr>
               ))}
                

            </table>

        </div>
      /* Something here */   
    )
}
export default Partner;