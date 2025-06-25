
interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div
        className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border border-white/30 shadow-lg shadow-box-shadow relative overflow-hidden"
        style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(0,0,0,0.2) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
        }}
    >
        <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
            {icon}
        </div>
        <div className="mt-6 space-y-4 relative">
            <h2
                className="text-lg md:text-xl font-semibold text-heading-1"
                style={{ color: "#ff6500" }}
            >
                {title}
            </h2>
            <p className="text-heading-3 font-semibold">{description}</p>
        </div>
    </div>
  );
};