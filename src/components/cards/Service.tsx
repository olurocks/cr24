
interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border border-white/30 shadow-lg shadow-box-shadow relative overflow-hidden bg-carousel hover:shadow-xl transition-shadow duration-300 ease-in-out hover:bg-opacity-90 hover:scale-[1.02] transform">
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
        <p className="text-body-text font-semibold">{description}</p>
      </div>
    </div>
  );
};