import SortSelect from './client/SortSelect';

interface HeaderSectionProps {
    selectedTag: string;
}

export default function HeaderSection({ selectedTag }: HeaderSectionProps) {
    return (
        <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
                {selectedTag === '전체' ? '전체 포스트' : `${selectedTag} 포스트`}
            </h2>
            <SortSelect />
        </div>
    );
}
