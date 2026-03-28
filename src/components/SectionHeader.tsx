interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

const SectionHeader = ({ title, actionLabel = 'View All', onAction }: SectionHeaderProps) => (
  <div className="flex items-center justify-between px-4 py-3">
    <h2 className="text-lg font-bold text-primary">{title}</h2>
    {onAction && (
      <button onClick={onAction} className="text-sm font-semibold text-accent">
        {actionLabel}
      </button>
    )}
  </div>
);

export default SectionHeader;
