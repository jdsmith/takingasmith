export const FooterCard = ({icon, title, children}) => (
    <div>
        {icon}
        <h3>{title}</h3>
        {children}
    </div>
);

FooterCard.displayName = 'FooterCard';

export default FooterCard;