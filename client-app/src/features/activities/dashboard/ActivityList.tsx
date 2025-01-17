import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { Fragment } from 'react/jsx-runtime';

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <div className="card-header fw-bold" style={{ color: '#008080', fontSize: '1rem' }}>
                        {group}
                    </div>
                    {activities.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
                    ))}
                </Fragment>
            ))}
        </>
    )
})
