import { withLayout } from "@/src/common/hoc/withLayout"

 function Dashboard() {
    return (
        <div>
          Hello world
        </div>
    )
}

export default withLayout(Dashboard, 'main');