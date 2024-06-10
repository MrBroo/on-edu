import { withLayout } from "@/src/common/hoc/withLayout"

function Course() {
    return <div>Hello course</div>
}

export default withLayout(Course, 'main');