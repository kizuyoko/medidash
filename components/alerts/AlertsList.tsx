type Alert = {
  label: string;
  count: number;
};

type Props = {
  alerts: Alert[];
}

const AlertsList = ({ alerts } : Props) => {
  if (alerts.length === 0) return null; 
  
  return alerts.length > 0 ? (
    <section className="card w-full my-2 py-2 border-(--color-border-alert) rounded-lg bg-(--color-bg-alert) text-sm">
      <ul className="md:flex gap-6">
        {alerts.map(alert => 
          alert.count > 0 && (
            <li key={alert.label} className=" text-(--color-text-alert)">
              <span className="text-xl">⚠ {alert.count} </span> 
              {alert.label}
            </li>
          )
        )}
      </ul>
    </section>
  ) : null;
}; 

export default AlertsList;