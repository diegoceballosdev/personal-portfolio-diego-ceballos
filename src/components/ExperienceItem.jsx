export const ExperienceItem = ({ key, data }) => (
    
    <div key={key} className="relative pl-8 pb-12 border-l-2 border-primary/20 last:pb-0">
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-[var(--background)]"></div>
        <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-xl font-bold text-foreground">{data.role}</h3>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                {data.period}
            </span>
        </div>
        <h4 className="text-base font-semibold text-muted-foreground mb-4">{data.company}</h4>
        <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{data.desc}</p>

        <div className="mb-4">
            <ul className="space-y-2">
                {data.tasks.map((task, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        {task}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex flex-wrap gap-2">
            {data.stack.map(tech => (
                <span key={tech} className="px-2 py-1 text-xs font-medium border border-custom rounded-md text-muted-foreground bg-card">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);
