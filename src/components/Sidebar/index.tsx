import { SidebarSteps } from './SidebarSteps'

export const Sidebar = () => {
  return (
    <aside className="h-[172px] w-full bg-[url('/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat lg:h-[568px] lg:w-[274px] lg:rounded-lg lg:bg-[url('/bg-sidebar-desktop.svg')]">
      <div className="flex h-full items-start justify-center px-8 py-10 lg:items-start lg:justify-start">
        <SidebarSteps />
      </div>
    </aside>
  )
}
