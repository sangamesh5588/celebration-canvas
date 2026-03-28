interface ServiceCardProps {
  image: string;
  title: string;
  price?: string;
  tag?: string;
  tagColor?: 'accent' | 'highlight';
}

const ServiceCard = ({ image, title, price, tag, tagColor = 'accent' }: ServiceCardProps) => {
  const tagBg = tagColor === 'highlight' ? 'bg-highlight text-highlight-foreground' : 'bg-accent text-accent-foreground';

  return (
    <div className="min-w-[200px] rounded-2xl overflow-hidden shadow-card bg-background border border-border/50 transition-transform active:scale-[0.98]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {tag && (
          <span className={`absolute top-2 left-2 text-[10px] font-bold px-2.5 py-1 rounded-full ${tagBg}`}>
            {tag}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">{title}</h3>
        {price && <p className="text-sm font-bold text-primary mt-1">{price}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;
