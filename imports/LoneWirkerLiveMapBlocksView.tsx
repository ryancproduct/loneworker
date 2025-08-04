// Placeholder images - replace Figma imports with placeholders
const imgAvatar = "https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=AP";
const imgAvatar1 = "https://via.placeholder.com/40x40/10B981/FFFFFF?text=SK";
const imgAvatar2 = "https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=MJ";
const imgImage = "https://via.placeholder.com/300x200/6B7280/FFFFFF?text=Dashboard";
const imgFeb = "https://via.placeholder.com/120x80/EF4444/FFFFFF?text=Feb";

// Mock svgPaths object to replace the large import
const svgPaths = new Proxy({}, {
  get: () => "M0 0h24v24H0z" // Simple placeholder SVG path
});

function Logo() {
  return (
    <div
      className="absolute h-[24.405px] left-0 top-0 w-[163.999px]"
      data-name="Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 164 25"
      >
        <g id="Logo">
          <path
            d={svgPaths.p11364600}
            fill="var(--fill-0, #FFD700)"
            id="Vector"
          />
          <path
            d={svgPaths.pdff4c00}
            fill="var(--fill-0, #00D1FF)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p155a7a00}
            fill="var(--fill-0, #6559FF)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p134a0500}
            fill="var(--fill-0, #293745)"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function SafetyCultureLogo() {
  return (
    <div
      className="h-[24.405px] relative shrink-0 w-[164px]"
      data-name="SafetyCulture/Logo"
    >
      <Logo />
    </div>
  );
}

function Logo1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-6 pt-0 px-7 relative w-full">
          <SafetyCultureLogo />
        </div>
      </div>
    </div>
  );
}

function House() {
  return (
    <div className="relative shrink-0 size-4" data-name="house">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="house">
          <path
            clipRule="evenodd"
            d={svgPaths.p24d31d00}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <House />
    </div>
  );
}

function MenuListItem() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-4" data-name="magnifying-glass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="magnifying-glass">
          <path
            clipRule="evenodd"
            d={svgPaths.p15857ff0}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <MagnifyingGlass />
    </div>
  );
}

function MenuListItem1() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon1 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-4" data-name="bell">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="bell">
          <path
            clipRule="evenodd"
            d={svgPaths.pf001b00}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <Bell />
    </div>
  );
}

function MenuListItem2() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon2 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-6 pt-0 px-0 relative shrink-0 w-[188px]"
      data-name="List"
    >
      <MenuListItem />
      <MenuListItem1 />
      <MenuListItem2 />
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 size-4" data-name="layout">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="layout">
          <path
            clipRule="evenodd"
            d={svgPaths.pe1b3880}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <Layout />
    </div>
  );
}

function MenuListItem3() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon3 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Templates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClipboardChecklist() {
  return (
    <div className="relative shrink-0 size-4" data-name="clipboard-checklist">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="clipboard-checklist">
          <g id="line">
            <path d={svgPaths.p17088830} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p2a27d380} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p1ae1ca00} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p143e7700} fill="var(--fill-0, #1F2533)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p34523400}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <ClipboardChecklist />
    </div>
  );
}

function MenuListItem4() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon4 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Inspections</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarDates() {
  return (
    <div className="relative shrink-0 size-4" data-name="calendar-dates">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="calendar-dates">
          <g id="line">
            <path d={svgPaths.p22e36f70} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p3d2d3df0} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p78ffd00} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p3549e280} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.pf8b5c80} fill="var(--fill-0, #1F2533)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p35213500}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <CalendarDates />
    </div>
  );
}

function MenuListItem5() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon5 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SquareCheckSquare() {
  return (
    <div className="relative shrink-0 size-4" data-name="square-check-square">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_42513)" id="square-check-square">
          <g id="line">
            <path d={svgPaths.p1899a140} fill="var(--fill-0, #1F2533)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p2e56da80}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42513">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <SquareCheckSquare />
    </div>
  );
}

function MenuListItem6() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon6 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Actions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cube() {
  return (
    <div className="relative shrink-0 size-4" data-name="cube">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="cube">
          <path
            clipRule="evenodd"
            d={svgPaths.pa685900}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <Cube />
    </div>
  );
}

function MenuListItem7() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon7 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Assets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageMiddleExclamation() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="message-middle-exclamation"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="message-middle-exclamation">
          <g id="line">
            <path d={svgPaths.p1487a680} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p35cee1b0} fill="var(--fill-0, #1F2533)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3813b200}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <MessageMiddleExclamation />
    </div>
  );
}

function MenuListItem8() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon8 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Issues</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapLocationPin() {
  return (
    <div className="relative shrink-0 size-4" data-name="map-location-pin">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_42474)" id="map-location-pin">
          <g id="line">
            <path
              d={svgPaths.p3da8aa00}
              fill="var(--fill-0, #564BE7)"
              fillOpacity="0.9"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p31602300}
              fill="var(--fill-0, #564BE7)"
              fillOpacity="0.9"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42474">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <MapLocationPin />
    </div>
  );
}

function Badge() {
  return (
    <div
      className="bg-[#564be7] box-border content-stretch flex flex-row h-5 items-center justify-center px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="Badge"
    >
      <div
        className="flex flex-col font-['Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[11px] text-center text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">New</p>
      </div>
    </div>
  );
}

function NotificationBadge() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Notification Badge"
    >
      <Badge />
    </div>
  );
}

function MenuListItem9() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon9 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(86,75,231,0.9)] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Lone worker</p>
          </div>
          <NotificationBadge />
        </div>
      </div>
    </div>
  );
}

function Megaphone() {
  return (
    <div className="relative shrink-0 size-4" data-name="megaphone">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="megaphone">
          <path
            clipRule="evenodd"
            d={svgPaths.pdf2b200}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <Megaphone />
    </div>
  );
}

function MenuListItem10() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon10 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Heads up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraduationCap() {
  return (
    <div className="relative shrink-0 size-4" data-name="graduation-cap">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_42465)" id="graduation-cap">
          <path
            clipRule="evenodd"
            d={svgPaths.p3c586e00}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_42465">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <GraduationCap />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-4" data-name="chevron-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-right">
          <path
            clipRule="evenodd"
            d={svgPaths.p1079ed00}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Arrow"
    >
      <ChevronRight />
    </div>
  );
}

function MenuListItem11() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon11 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Training</p>
          </div>
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Signal() {
  return (
    <div className="relative shrink-0 size-4" data-name="signal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="signal">
          <g id="line">
            <path d={svgPaths.p1a7dcf00} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p27df8280} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p1cd80280} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p2c762d00} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p18635ff0} fill="var(--fill-0, #1F2533)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <Signal />
    </div>
  );
}

function MenuListItem12() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon12 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Sensors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartPie() {
  return (
    <div className="relative shrink-0 size-4" data-name="chart-pie">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_42489)" id="chart-pie">
          <g id="line">
            <path
              clipRule="evenodd"
              d={svgPaths.p1e9ca300}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
            <path d={svgPaths.p17136980} fill="var(--fill-0, #1F2533)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42489">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <ChartPie />
    </div>
  );
}

function MenuListItem13() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon13 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartShopping() {
  return (
    <div className="relative shrink-0 size-4" data-name="cart-shopping">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_42431)" id="cart-shopping">
          <g id="line">
            <path
              clipRule="evenodd"
              d={svgPaths.p22b5aa00}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
            <path d={svgPaths.p62a880} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p319fb900} fill="var(--fill-0, #1F2533)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42431">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[4px] relative shrink-0"
      data-name="Icon"
    >
      <CartShopping />
    </div>
  );
}

function MenuListItem14() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="Menu List Item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start px-2 py-1.5 relative w-full">
          <Icon14 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Marketplace</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-6 px-0 relative shrink-0 w-[188px]"
      data-name="List"
    >
      <MenuListItem3 />
      <MenuListItem4 />
      <MenuListItem5 />
      <MenuListItem6 />
      <MenuListItem7 />
      <MenuListItem8 />
      <MenuListItem9 />
      <MenuListItem10 />
      <MenuListItem11 />
      <MenuListItem12 />
      <MenuListItem13 />
      <MenuListItem14 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[791.595px] items-start justify-start left-0 px-4 py-0 top-0"
      data-name="Nav"
    >
      <List />
      <div
        className="bg-[#e9edf6] h-0.5 rounded-sm shrink-0 w-[188px]"
        data-name="Divider"
      />
      <List1 />
    </div>
  );
}

function Scroll() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full"
      data-name="scroll"
    >
      <Nav />
    </div>
  );
}

function CircleQuestionMark() {
  return (
    <div className="relative shrink-0 size-5" data-name="circle-question-mark">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_42462)" id="circle-question-mark">
          <g id="line">
            <path d={svgPaths.pf37800} fill="var(--fill-0, #1F2533)" />
            <path d={svgPaths.p240a6880} fill="var(--fill-0, #1F2533)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p19c04180}
              fill="var(--fill-0, #1F2533)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42462">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <CircleQuestionMark />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1f2533] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Help</p>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron-right">
          <path
            clipRule="evenodd"
            d={svgPaths.p2cbb2a80}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Help() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Help">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <Content />
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function Cog() {
  return (
    <div className="relative shrink-0 size-5" data-name="cog">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_42516)" id="cog">
          <path
            clipRule="evenodd"
            d={svgPaths.p1ea56280}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_42516">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-0 py-0.5 relative shrink-0"
      data-name="Icon"
    >
      <Cog />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-left text-nowrap"
      data-name="Content"
    >
      <div
        className="relative shrink-0 text-[#1f2533] text-[14px]"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[20px] text-nowrap whitespace-pre">
          Company
        </p>
      </div>
      <div
        className="relative shrink-0 text-[#545f70] text-[12px]"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] text-nowrap whitespace-pre">
          Steve Jobs
        </p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <Icon15 />
      <Content1 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron-right">
          <path
            clipRule="evenodd"
            d={svgPaths.p2cbb2a80}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Account() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Account">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <Content2 />
          <ChevronRight2 />
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-0 pt-6 px-0 relative shrink-0 w-full"
      data-name="Settings"
    >
      <Help />
      <Account />
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-[#f8f9fc] relative shrink-0 w-full" data-name="bottom">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-8 pt-0 px-4 relative w-full">
          <Settings />
          <div
            className="absolute bg-[#e9edf6] h-0.5 left-0 right-0 rounded-sm top-0"
            data-name="Divider"
          />
        </div>
      </div>
    </div>
  );
}

function NavigationWebSmall() {
  return (
    <div
      className="bg-[#f8f9fc] box-border content-stretch flex flex-col h-full items-start justify-start pb-0 pt-8 px-0 relative shrink-0 w-[220px]"
      data-name="Navigation Web Small"
    >
      <Logo1 />
      <Scroll />
      <Bottom />
    </div>
  );
}

function Tab() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-center min-h-px min-w-px pb-0 pt-0.5 px-3 relative rounded-xl shrink-0"
      data-name="Tab"
    >
      <div
        className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4740d4] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Live map</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div
      className="bg-[#675df4] h-0.5 rounded-sm shrink-0 w-full"
      data-name="Border"
    />
  );
}

function Border1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-0 relative w-full">
          <Border />
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0"
      data-name="Tab"
    >
      <Tab />
      <Border1 />
    </div>
  );
}

function Tab2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-center min-h-px min-w-px pb-0 pt-0.5 px-3 relative rounded-xl shrink-0"
      data-name="Tab"
    >
      <div
        className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#545f70] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">History</p>
      </div>
    </div>
  );
}

function Border2() {
  return <div className="h-px shrink-0 w-full" data-name="Border" />;
}

function Tab3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-center justify-center p-0 relative shrink-0"
      data-name="Tab"
    >
      <Tab2 />
      <Border2 />
    </div>
  );
}

function Tab4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-center min-h-px min-w-px pb-0 pt-0.5 px-3 relative rounded-xl shrink-0"
      data-name="Tab"
    >
      <div
        className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#545f70] text-[14px] text-center text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Border3() {
  return <div className="h-px shrink-0 w-full" data-name="Border" />;
}

function Tab5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-full items-center justify-center p-0 relative shrink-0"
      data-name="Tab"
    >
      <Tab4 />
      <Border3 />
    </div>
  );
}

function TabGroup() {
  return (
    <div
      className="[flex-flow:wrap] basis-0 box-border content-stretch flex gap-0 grow h-10 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Tab Group"
    >
      <Tab1 />
      <Tab3 />
      <Tab5 />
    </div>
  );
}

function MessageMiddleExclamation1() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="message-middle-exclamation"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="message-middle-exclamation">
          <g id="line">
            <path d={svgPaths.pedd5000} fill="var(--fill-0, #4740D4)" />
            <path d={svgPaths.p30971200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p931d600}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-8 relative rounded-lg shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-center px-3 py-1 relative w-full">
          <MessageMiddleExclamation1 />
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4740d4] text-[14px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px] whitespace-pre">Send feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-full items-start justify-center p-0 relative shrink-0 w-36"
      data-name="Button container"
    >
      <Button />
    </div>
  );
}

function SecondaryNav() {
  return (
    <div className="relative shrink-0 w-full" data-name="SecondaryNav">
      <div className="absolute border-[#dbe0eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-end justify-start pb-0 pt-1 px-1 relative w-full">
          <TabGroup />
          <div className="flex flex-row items-end self-stretch">
            <ButtonContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Pin() {
  return (
    <div
      className="absolute bottom-[1.074%] left-[16.667%] right-[16.667%] top-[22.917%]"
      data-name="Pin"
    >
      <div className="absolute bottom-[-10.964%] left-[-9.375%] right-[-9.375%] top-[-5.482%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 38 43"
        >
          <g filter="url(#filter0_d_1_42442)" id="Pin">
            <path
              d={svgPaths.p8777500}
              fill="var(--fill-0, white)"
              id="Union"
              stroke="var(--stroke-0, white)"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p8777500}
              fill="var(--fill-0, white)"
              id="Union_2"
              stroke="var(--stroke-0, white)"
              strokeWidth="2"
            />
            <circle
              cx="18.999"
              cy="17.9238"
              fill="var(--fill-0, #3F495A)"
              id="Ellipse"
              r="14.1709"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="42.4845"
              id="filter0_d_1_42442"
              width="38"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_42442"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_42442"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div
      className="absolute size-12 translate-x-[-50%] translate-y-[-50%]"
      data-name="Component 4"
      style={{ top: "calc(50% - 31px)", left: "calc(50% + 355px)" }}
    >
      <Pin />
      <div
        className="absolute bottom-[27.083%] flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] left-[19.792%] right-[19.792%] text-[#ffffff] text-[12px] text-center top-[39.583%]"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">5</p>
      </div>
    </div>
  );
}

function Mother() {
  return (
    <div
      className="bg-[#3f495a] box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-12"
      data-name="Mother"
    >
      <div className="absolute border-[#ffffff] border-[3px] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.12)]" />
      <div
        className="[text-shadow:rgba(0,0,0,0.25)_0px_4px_4px] flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 translate-x-[-50%] translate-y-[-50%]"
      data-name="Component 5"
      style={{ top: "calc(50% - 163px)", left: "calc(50% + 279px)" }}
    >
      <Mother />
    </div>
  );
}

function Pin1() {
  return (
    <div
      className="absolute bottom-[0.515px] h-[36.484px] left-0 right-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
      data-name="Pin"
    >
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[17.514%] left-[5.713%] right-[5.719%] top-[4.805%]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 29 29"
        >
          <circle
            cx="14.1709"
            cy="14.1709"
            fill="var(--fill-0, #6559FF)"
            id="Ellipse"
            r="14.1709"
          />
        </svg>
      </div>
    </div>
  );
}

function UserCircleFilled() {
  return (
    <div
      className="absolute aspect-[20/20] left-[18.75%] right-[18.75%] translate-y-[-50%]"
      data-name="user-circle-filled"
      style={{ top: "calc(50% - 2.5px)" }}
    >
      <div
        className="absolute bottom-[4.166%] left-[4.166%] right-[4.167%] top-[4.167%]"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 19"
        >
          <g id="Union">
            <path d={svgPaths.p36d77000} fill="var(--fill-0, white)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p39088f80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PinUser() {
  return (
    <div
      className="absolute h-[37px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] top-0 w-8"
      data-name="Pin-User"
    >
      <Pin1 />
      <UserCircleFilled />
    </div>
  );
}

function PinHoverCard() {
  return (
    <div
      className="absolute h-[37px] left-[673px] top-[317px] w-8"
      data-name="Pin-HoverCard"
    >
      <PinUser />
    </div>
  );
}

function Pin2() {
  return (
    <div
      className="absolute bottom-[0.515px] h-[36.484px] left-0 right-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
      data-name="Pin"
    >
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[17.514%] left-[5.713%] right-[5.719%] top-[4.805%]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 29 29"
        >
          <circle
            cx="14.1709"
            cy="14.1709"
            fill="var(--fill-0, #6559FF)"
            id="Ellipse"
            r="14.1709"
          />
        </svg>
      </div>
    </div>
  );
}

function NavPointerTopRightFilled() {
  return (
    <div
      className="absolute bottom-[8.334%] left-[4.167%] right-[12.5%] top-[8.333%]"
      data-name="nav-pointer-top-right-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="nav-pointer-top-right-filled">
          <path
            clipRule="evenodd"
            d={svgPaths.p30d0ea80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function SelectedNavArrowAnimation() {
  return (
    <div
      className="absolute left-1.5 overflow-clip size-5 top-[6.5px]"
      data-name="Selected-NavArrow-Animation"
    >
      <NavPointerTopRightFilled />
    </div>
  );
}

function PinUser1() {
  return (
    <div
      className="absolute h-[37px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] top-0 w-8"
      data-name="Pin-User"
    >
      <Pin2 />
      <SelectedNavArrowAnimation />
    </div>
  );
}

function PinHoverCard1() {
  return (
    <div
      className="absolute h-[37px] left-[752px] top-[421px] w-8"
      data-name="Pin-HoverCard"
    >
      <PinUser1 />
    </div>
  );
}

function Pin3() {
  return (
    <div
      className="absolute bottom-[0.515px] h-[36.484px] left-0 right-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
      data-name="Pin"
    >
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[17.514%] left-[5.713%] right-[5.719%] top-[4.805%]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 29 29"
        >
          <circle
            cx="14.1709"
            cy="14.1709"
            fill="var(--fill-0, #C62F35)"
            id="Ellipse"
            r="14.1709"
          />
        </svg>
      </div>
    </div>
  );
}

function UserCircleFilled1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="user-circle-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="user-circle-filled">
          <g id="Union">
            <path d={svgPaths.p2875e00} fill="var(--fill-0, white)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p54c7580}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PanicDotFilledAnimation() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-1.5 p-0 size-5 top-1.5"
      data-name="Panic-Dot-Filled-Animation"
    >
      <UserCircleFilled1 />
    </div>
  );
}

function PinUser2() {
  return (
    <div
      className="absolute h-[37px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] top-0 w-8"
      data-name="Pin-User"
    >
      <Pin3 />
      <PanicDotFilledAnimation />
    </div>
  );
}

function PinHoverCard2() {
  return (
    <div
      className="absolute h-[37px] translate-x-[-50%] translate-y-[-50%] w-8"
      data-name="Pin-HoverCard"
      style={{ top: "calc(50% + 99.5px)", left: "calc(50% + 251px)" }}
    >
      <PinUser2 />
    </div>
  );
}

function Pin4() {
  return (
    <div
      className="absolute bottom-[0.515px] h-[36.484px] left-0 right-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)]"
      data-name="Pin"
    >
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute inset-0" data-name="Union">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 37"
        >
          <path
            d={svgPaths.p3d1b5000}
            fill="var(--fill-0, white)"
            id="Union"
            stroke="var(--stroke-0, white)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[17.514%] left-[5.713%] right-[5.719%] top-[4.805%]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 29 29"
        >
          <circle
            cx="14.1709"
            cy="14.1709"
            fill="var(--fill-0, #C62F35)"
            id="Ellipse"
            r="14.1709"
          />
        </svg>
      </div>
    </div>
  );
}

function NavPointerTopRightFilled1() {
  return (
    <div
      className="absolute bottom-[8.334%] left-[4.167%] right-[12.5%] top-[8.333%]"
      data-name="nav-pointer-top-right-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 17"
      >
        <g id="nav-pointer-top-right-filled">
          <path
            clipRule="evenodd"
            d={svgPaths.p30d0ea80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function SelectedNavArrowAnimation1() {
  return (
    <div
      className="absolute left-1.5 overflow-clip size-5 top-[6.5px]"
      data-name="Selected-NavArrow-Animation"
    >
      <NavPointerTopRightFilled1 />
    </div>
  );
}

function PinUser3() {
  return (
    <div
      className="absolute h-[37px] left-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] top-0 w-8"
      data-name="Pin-User"
    >
      <Pin4 />
      <SelectedNavArrowAnimation1 />
    </div>
  );
}

function PinHoverCard3() {
  return (
    <div
      className="absolute h-[37px] translate-x-[-50%] translate-y-[-50%] w-8"
      data-name="Pin-HoverCard"
      style={{ top: "calc(50% + 153.5px)", left: "calc(50% + 178px)" }}
    >
      <PinUser3 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icons">
          <path
            d={svgPaths.pb1a0580}
            id="Rectangle 32"
            stroke="var(--stroke-0, #4740D4)"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-3 relative rounded-lg shrink-0 size-10"
      data-name="Button"
    >
      <Icons />
    </div>
  );
}

function SidebarHide() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative rounded-lg shrink-0"
      data-name="Sidebar-Hide"
    >
      <Button1 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start order-2 p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#1f2533] text-[18px] text-left"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[24px]">Lone Worker</p>
      </div>
      <SidebarHide />
    </div>
  );
}

function MagnifyingGlass1() {
  return (
    <div className="relative shrink-0 size-4" data-name="magnifying-glass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="magnifying-glass">
          <path
            clipRule="evenodd"
            d={svgPaths.p15857ff0}
            fill="var(--fill-0, #1F2533)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function InputText() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-10 min-h-10 min-w-px relative rounded-lg shrink-0"
      data-name="Input (Text)"
    >
      <div className="absolute border border-[#bfc6d4] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start min-h-inherit pl-3 pr-1 py-0 relative w-full">
          <MagnifyingGlass1 />
          <div
            className="basis-0 flex flex-col font-['Noto_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#bfc6d4] text-[14px] text-left"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[20px]">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputSearch() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow h-10 items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Input/Search"
    >
      <InputText />
    </div>
  );
}

function BarsFilter() {
  return (
    <div className="relative shrink-0 size-5" data-name="bars-filter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="bars-filter">
          <g id="line">
            <path
              clipRule="evenodd"
              d={svgPaths.p14712200}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p6b68900}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p37bfe5ba}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-center px-2 py-2.5 relative rounded-lg shrink-0 w-10"
      data-name="Button"
    >
      <BarsFilter />
    </div>
  );
}

function FilterButton() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Filter Button"
    >
      <Button2 />
    </div>
  );
}

function IconButtonFilter() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="IconButton-Filter"
    >
      <FilterButton />
    </div>
  );
}

function IconFilterButton() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="IconFilterButton"
    >
      <IconButtonFilter />
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="SearchBar"
    >
      <InputSearch />
      <IconFilterButton />
    </div>
  );
}

function NumberOfUsersOnline() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-end justify-start p-0 relative shrink-0"
      data-name="Number of users online"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#828ea0] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">57 users</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start order-2 p-0 relative shrink-0 w-full"
      data-name="Search"
    >
      <SearchBar />
      <NumberOfUsersOnline />
    </div>
  );
}

function ToggleBg() {
  return (
    <div
      className="bg-[#bfc6d4] h-5 rounded-[1e+11px] shrink-0 w-9"
      data-name=".toggle-bg"
    />
  );
}

function ToggleBall() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[10%] left-[5.556%] right-1/2 rounded-[1e+11px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_12px_0px_rgba(0,0,0,0.12)] top-[10%]"
      data-name=".toggle-ball"
    />
  );
}

function ToggleSwitch() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="toggle-switch"
    >
      <ToggleBg />
      <ToggleBall />
    </div>
  );
}

function Toggle() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Toggle"
    >
      <ToggleSwitch />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#1f2533] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Organize by groups
        </p>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="grid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="grid">
          <path
            clipRule="evenodd"
            d={svgPaths.p70c9c00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="Union"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2787c460}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="Union_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14862a00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="Union_3"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="bg-[#cfd2fc] box-border content-stretch flex flex-row items-center justify-center max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-lg shrink-0 size-8"
      data-name="Icon Button"
    >
      <Grid />
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="list">
          <g id="line">
            <path d={svgPaths.pb512100} fill="var(--fill-0, #4740D4)" />
            <path d={svgPaths.paca8080} fill="var(--fill-0, #4740D4)" />
            <path d={svgPaths.p34ca00f0} fill="var(--fill-0, #4740D4)" />
            <path d={svgPaths.p27191180} fill="var(--fill-0, #4740D4)" />
            <path d={svgPaths.p1d82db00} fill="var(--fill-0, #4740D4)" />
            <path d={svgPaths.p23680e80} fill="var(--fill-0, #4740D4)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-lg shrink-0 size-8"
      data-name="Icon Button"
    >
      <List2 />
    </div>
  );
}

function View() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="View"
    >
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function View1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between order-1 p-0 relative shrink-0 w-full"
      data-name="View"
    >
      <Toggle />
      <View />
    </div>
  );
}

function SearchBar1() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse gap-1 items-start justify-start order-1 p-0 relative shrink-0 w-full"
      data-name="SearchBar"
    >
      <Search />
      <View1 />
    </div>
  );
}

function TopBlock() {
  return (
    <div
      className="bg-[#ffffff] order-2 relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full"
      data-name="Top block"
    >
      <div className="absolute border-[#dbe0eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col-reverse gap-2 items-start justify-center pl-5 pr-3 py-2 relative w-full">
          <Header />
          <SearchBar1 />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#e9edf6] box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative rounded-[64px] shrink-0 size-8"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">AP</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="avatar"
    >
      <Avatar />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Home visit
        </p>
      </div>
    </div>
  );
}

function JobType() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel />
    </div>
  );
}

function User() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Anthony Pringle
        </p>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:26:43</p>
      </div>
    </div>
  );
}

function IconLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          HV-0000567
        </p>
      </div>
    </div>
  );
}

function BluetoothConnected1() {
  return (
    <div className="relative shrink-0 size-3" data-name="bluetooth-connected">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="bluetooth-connected">
          <path
            clipRule="evenodd"
            d={svgPaths.p15c4f800}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
          <circle
            cx="2.45703"
            cy="6"
            fill="var(--fill-0, #4740D4)"
            id="Ellipse 1"
            r="0.75"
          />
          <circle
            cx="9.41406"
            cy="6"
            fill="var(--fill-0, #4740D4)"
            id="Ellipse 2"
            r="0.75"
          />
        </g>
      </svg>
    </div>
  );
}

function BluetoothDevice() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Bluetooth-device"
    >
      <BluetoothConnected1 />
    </div>
  );
}

function Labels() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer />
      <IconLabel />
      <BluetoothDevice />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType />
      <User />
      <Labels />
    </div>
  );
}

function MainConteiner() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar1 />
      <Content3 />
    </div>
  );
}

function LocationCrosshairs() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs />
    </div>
  );
}

function Locate() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button3 />
    </div>
  );
}

function Badge1() {
  return (
    <div
      className="bg-[#fff0f1] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a8242a] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Panic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate />
      <Badge1 />
    </div>
  );
}

function Mother1() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner />
          <RightBlock />
        </div>
      </div>
    </div>
  );
}

function CardVariant2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother1 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar2() {
  return (
    <div
      className="absolute bg-[#e2eeff] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">JI</p>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label1 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Nursing
        </p>
      </div>
    </div>
  );
}

function JobType1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel1 />
    </div>
  );
}

function User1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Jack Irwin
        </p>
      </div>
    </div>
  );
}

function Clock1() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock1 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:43:43</p>
      </div>
    </div>
  );
}

function IconLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          HV-0004538
        </p>
      </div>
    </div>
  );
}

function Labels1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer1 />
      <IconLabel1 />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType1 />
      <User1 />
      <Labels1 />
    </div>
  );
}

function MainConteiner1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar3 />
      <Content4 />
    </div>
  );
}

function LocationCrosshairs1() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs1 />
    </div>
  );
}

function Locate1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button4 />
    </div>
  );
}

function Badge2() {
  return (
    <div
      className="bg-[#fff0f1] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a8242a] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Panic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate1 />
      <Badge2 />
    </div>
  );
}

function Mother2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner1 />
          <RightBlock1 />
        </div>
      </div>
    </div>
  );
}

function CardVariant3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother2 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar4() {
  return (
    <div
      className="absolute bg-[#dbf6ff] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">AW</p>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar4 />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label2 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Home visit
        </p>
      </div>
    </div>
  );
}

function JobType2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel2 />
    </div>
  );
}

function User2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Anna White
        </p>
      </div>
    </div>
  );
}

function Clock2() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock2 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:12:05</p>
      </div>
    </div>
  );
}

function IconLabel2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          HV-000076
        </p>
      </div>
    </div>
  );
}

function Labels2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer2 />
      <IconLabel2 />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType2 />
      <User2 />
      <Labels2 />
    </div>
  );
}

function MainConteiner2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar5 />
      <Content5 />
    </div>
  );
}

function LocationCrosshairs2() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs2 />
    </div>
  );
}

function Locate2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button5 />
    </div>
  );
}

function Badge3() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate2 />
      <Badge3 />
    </div>
  );
}

function Mother3() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner2 />
          <RightBlock2 />
        </div>
      </div>
    </div>
  );
}

function CardVariant4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother3 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar6() {
  return (
    <div
      className="absolute bg-[#f7e9ff] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">BM</p>
      </div>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar6 />
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label3 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Remote Healthcare Supervision and Incident Management
        </p>
      </div>
    </div>
  );
}

function JobType3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel3 />
    </div>
  );
}

function User3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Bartholomew Theophilus Montgomery
        </p>
      </div>
    </div>
  );
}

function Clock3() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock3 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">01:22:43</p>
      </div>
    </div>
  );
}

function IconLabel3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          RHS-000678
        </p>
      </div>
    </div>
  );
}

function Labels3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer3 />
      <IconLabel3 />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType3 />
      <User3 />
      <Labels3 />
    </div>
  );
}

function MainConteiner3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar7 />
      <Content6 />
    </div>
  );
}

function LocationCrosshairs3() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs3 />
    </div>
  );
}

function Locate3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button6 />
    </div>
  );
}

function Badge4() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate3 />
      <Badge4 />
    </div>
  );
}

function Mother4() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner3 />
          <RightBlock3 />
        </div>
      </div>
    </div>
  );
}

function CardVariant5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother4 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar8() {
  return (
    <div
      className="absolute bg-[#fff4d8] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">IM</p>
      </div>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar8 />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label4 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Nursing
        </p>
      </div>
    </div>
  );
}

function JobType4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel4 />
    </div>
  );
}

function User4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Isabella Martin
        </p>
      </div>
    </div>
  );
}

function Clock4() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock4 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:25:16</p>
      </div>
    </div>
  );
}

function IconLabel4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          NC-0004325
        </p>
      </div>
    </div>
  );
}

function Labels4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer4 />
      <IconLabel4 />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType4 />
      <User4 />
      <Labels4 />
    </div>
  );
}

function MainConteiner4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar9 />
      <Content7 />
    </div>
  );
}

function LocationCrosshairs4() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs4 />
    </div>
  );
}

function Locate4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button7 />
    </div>
  );
}

function Badge5() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate4 />
      <Badge5 />
    </div>
  );
}

function Mother5() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner4 />
          <RightBlock4 />
        </div>
      </div>
    </div>
  );
}

function CardVariant6() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother5 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar10() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[64px] shrink-0 size-8"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar}')` }}
    />
  );
}

function Avatar11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="avatar"
    >
      <Avatar10 />
    </div>
  );
}

function Label5() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label5 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Nursing
        </p>
      </div>
    </div>
  );
}

function JobType5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel5 />
    </div>
  );
}

function User5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Charlotte Brown
        </p>
      </div>
    </div>
  );
}

function Clock5() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock5 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:57:43</p>
      </div>
    </div>
  );
}

function IconLabel5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          NC-000678
        </p>
      </div>
    </div>
  );
}

function BluetoothConnected3() {
  return (
    <div className="relative shrink-0 size-3" data-name="bluetooth-connected">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="bluetooth-connected">
          <path
            clipRule="evenodd"
            d={svgPaths.p15c4f800}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
          <circle
            cx="2.45703"
            cy="6"
            fill="var(--fill-0, #4740D4)"
            id="Ellipse 1"
            r="0.75"
          />
          <circle
            cx="9.41406"
            cy="6"
            fill="var(--fill-0, #4740D4)"
            id="Ellipse 2"
            r="0.75"
          />
        </g>
      </svg>
    </div>
  );
}

function BluetoothDevice1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Bluetooth-device"
    >
      <BluetoothConnected3 />
    </div>
  );
}

function Labels5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer5 />
      <IconLabel5 />
      <BluetoothDevice1 />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType5 />
      <User5 />
      <Labels5 />
    </div>
  );
}

function MainConteiner5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar11 />
      <Content8 />
    </div>
  );
}

function LocationCrosshairs5() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs5 />
    </div>
  );
}

function Locate5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button8 />
    </div>
  );
}

function Badge6() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate5 />
      <Badge6 />
    </div>
  );
}

function Mother6() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner5 />
          <RightBlock5 />
        </div>
      </div>
    </div>
  );
}

function CardVariant7() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother6 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar12() {
  return (
    <div
      className="absolute bg-[#ffe9e9] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">CB</p>
      </div>
    </div>
  );
}

function Avatar13() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar12 />
    </div>
  );
}

function Label6() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label6 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Community work
        </p>
      </div>
    </div>
  );
}

function JobType6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel6 />
    </div>
  );
}

function User6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Charlotte Bennett
        </p>
      </div>
    </div>
  );
}

function Clock6() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock6 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:26:43</p>
      </div>
    </div>
  );
}

function IconLabel6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          CW-098090
        </p>
      </div>
    </div>
  );
}

function Labels6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer6 />
      <IconLabel6 />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType6 />
      <User6 />
      <Labels6 />
    </div>
  );
}

function MainConteiner6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar13 />
      <Content9 />
    </div>
  );
}

function LocationCrosshairs6() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs6 />
    </div>
  );
}

function Locate6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button9 />
    </div>
  );
}

function Badge7() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate6 />
      <Badge7 />
    </div>
  );
}

function Mother7() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner6 />
          <RightBlock6 />
        </div>
      </div>
    </div>
  );
}

function CardVariant8() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother7 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar14() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[64px] shrink-0 size-8"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar1}')` }}
    />
  );
}

function Avatar15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="avatar"
    >
      <Avatar14 />
    </div>
  );
}

function Label7() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label7 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Community work
        </p>
      </div>
    </div>
  );
}

function JobType7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel7 />
    </div>
  );
}

function User7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Daniel Lewis
        </p>
      </div>
    </div>
  );
}

function Clock7() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42398)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #BD5800)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #BD5800)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42398">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock7 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#bd5800] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">Overtime</p>
      </div>
    </div>
  );
}

function IconLabel7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          CW-00065
        </p>
      </div>
    </div>
  );
}

function Labels7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer7 />
      <IconLabel7 />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType7 />
      <User7 />
      <Labels7 />
    </div>
  );
}

function MainConteiner7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar15 />
      <Content10 />
    </div>
  );
}

function LocationCrosshairs7() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs7 />
    </div>
  );
}

function Locate7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button10 />
    </div>
  );
}

function Badge8() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate7 />
      <Badge8 />
    </div>
  );
}

function Mother8() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner7 />
          <RightBlock7 />
        </div>
      </div>
    </div>
  );
}

function CardVariant9() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother8 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar16() {
  return (
    <div
      className="absolute bg-[#dafff2] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">ED</p>
      </div>
    </div>
  );
}

function Avatar17() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar16 />
    </div>
  );
}

function Label8() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label8 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Nursing
        </p>
      </div>
    </div>
  );
}

function JobType8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel8 />
    </div>
  );
}

function User8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Eleanor Davidson
        </p>
      </div>
    </div>
  );
}

function Clock8() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock8 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:43:16</p>
      </div>
    </div>
  );
}

function IconLabel8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          NC-0004398
        </p>
      </div>
    </div>
  );
}

function Labels8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer8 />
      <IconLabel8 />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType8 />
      <User8 />
      <Labels8 />
    </div>
  );
}

function MainConteiner8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar17 />
      <Content11 />
    </div>
  );
}

function LocationCrosshairs8() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs8 />
    </div>
  );
}

function Locate8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button11 />
    </div>
  );
}

function Badge9() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate8 />
      <Badge9 />
    </div>
  );
}

function Mother9() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner8 />
          <RightBlock8 />
        </div>
      </div>
    </div>
  );
}

function CardVariant10() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother9 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar18() {
  return (
    <div
      className="absolute bg-[#ffeaf5] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">EG</p>
      </div>
    </div>
  );
}

function Avatar19() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar18 />
    </div>
  );
}

function Label9() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label9 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Community work
        </p>
      </div>
    </div>
  );
}

function JobType9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel9 />
    </div>
  );
}

function User9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Emma Garcia
        </p>
      </div>
    </div>
  );
}

function Clock9() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock9 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">01:47:19</p>
      </div>
    </div>
  );
}

function IconLabel9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          CW-000354
        </p>
      </div>
    </div>
  );
}

function Labels9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer9 />
      <IconLabel9 />
    </div>
  );
}

function Content12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType9 />
      <User9 />
      <Labels9 />
    </div>
  );
}

function MainConteiner9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar19 />
      <Content12 />
    </div>
  );
}

function LocationCrosshairs9() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs9 />
    </div>
  );
}

function Locate9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button12 />
    </div>
  );
}

function Badge10() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate9 />
      <Badge10 />
    </div>
  );
}

function Mother10() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner9 />
          <RightBlock9 />
        </div>
      </div>
    </div>
  );
}

function CardVariant11() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother10 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar20() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[64px] shrink-0 size-8"
      data-name="Avatar"
      style={{ backgroundImage: `url('${imgAvatar2}')` }}
    />
  );
}

function Avatar21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="avatar"
    >
      <Avatar20 />
    </div>
  );
}

function Label10() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label10 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Home visit
        </p>
      </div>
    </div>
  );
}

function JobType10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel10 />
    </div>
  );
}

function User10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Ethan Robinson
        </p>
      </div>
    </div>
  );
}

function Clock10() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock10 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:31:54</p>
      </div>
    </div>
  );
}

function IconLabel10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          HV-00008564
        </p>
      </div>
    </div>
  );
}

function Labels10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer10 />
      <IconLabel10 />
    </div>
  );
}

function Content13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType10 />
      <User10 />
      <Labels10 />
    </div>
  );
}

function MainConteiner10() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar21 />
      <Content13 />
    </div>
  );
}

function LocationCrosshairs10() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs10 />
    </div>
  );
}

function Locate10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button13 />
    </div>
  );
}

function Badge11() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate10 />
      <Badge11 />
    </div>
  );
}

function Mother11() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner10 />
          <RightBlock10 />
        </div>
      </div>
    </div>
  );
}

function CardVariant12() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother11 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar22() {
  return (
    <div
      className="absolute bg-[#fff4d8] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">GF</p>
      </div>
    </div>
  );
}

function Avatar23() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar22 />
    </div>
  );
}

function Label11() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label11 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Nursing
        </p>
      </div>
    </div>
  );
}

function JobType11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel11 />
    </div>
  );
}

function User11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Gabriella Foster
        </p>
      </div>
    </div>
  );
}

function Clock11() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock11 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">00:05:16</p>
      </div>
    </div>
  );
}

function IconLabel11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          NC-0004339
        </p>
      </div>
    </div>
  );
}

function Labels11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer11 />
      <IconLabel11 />
    </div>
  );
}

function Content14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType11 />
      <User11 />
      <Labels11 />
    </div>
  );
}

function MainConteiner11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar23 />
      <Content14 />
    </div>
  );
}

function LocationCrosshairs11() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs11 />
    </div>
  );
}

function Locate11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button14 />
    </div>
  );
}

function Badge12() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate11 />
      <Badge12 />
    </div>
  );
}

function Mother12() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner11 />
          <RightBlock11 />
        </div>
      </div>
    </div>
  );
}

function CardVariant13() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother12 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar24() {
  return (
    <div
      className="absolute bg-[#dbf6ff] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">HG</p>
      </div>
    </div>
  );
}

function Avatar25() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar24 />
    </div>
  );
}

function Label12() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label12 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Delivery
        </p>
      </div>
    </div>
  );
}

function JobType12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel12 />
    </div>
  );
}

function User12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Henry Graham
        </p>
      </div>
    </div>
  );
}

function Clock12() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock12 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">02:02:56</p>
      </div>
    </div>
  );
}

function IconLabel12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          NC-0003625
        </p>
      </div>
    </div>
  );
}

function Labels12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer12 />
      <IconLabel12 />
    </div>
  );
}

function Content15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType12 />
      <User12 />
      <Labels12 />
    </div>
  );
}

function MainConteiner12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar25 />
      <Content15 />
    </div>
  );
}

function LocationCrosshairs12() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs12 />
    </div>
  );
}

function Locate12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button15 />
    </div>
  );
}

function Badge13() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate12 />
      <Badge13 />
    </div>
  );
}

function Mother13() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner12 />
          <RightBlock12 />
        </div>
      </div>
    </div>
  );
}

function CardVariant14() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother13 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar26() {
  return (
    <div
      className="absolute bg-[#ecffe7] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">IH</p>
      </div>
    </div>
  );
}

function Avatar27() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar26 />
    </div>
  );
}

function Label13() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label13 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Nursing
        </p>
      </div>
    </div>
  );
}

function JobType13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel13 />
    </div>
  );
}

function User13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Isabella Hayes
        </p>
      </div>
    </div>
  );
}

function Clock13() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock13 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">01:04:16</p>
      </div>
    </div>
  );
}

function IconLabel13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          NC-0001925
        </p>
      </div>
    </div>
  );
}

function Labels13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer13 />
      <IconLabel13 />
    </div>
  );
}

function Content16() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType13 />
      <User13 />
      <Labels13 />
    </div>
  );
}

function MainConteiner13() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar27 />
      <Content16 />
    </div>
  );
}

function LocationCrosshairs13() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs13 />
    </div>
  );
}

function Locate13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button16 />
    </div>
  );
}

function Badge14() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate13 />
      <Badge14 />
    </div>
  );
}

function Mother14() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner13 />
          <RightBlock13 />
        </div>
      </div>
    </div>
  );
}

function CardVariant15() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother14 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar28() {
  return (
    <div
      className="absolute bg-[#dafff2] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">JT</p>
      </div>
    </div>
  );
}

function Avatar29() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar28 />
    </div>
  );
}

function Label14() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label14 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Community work
        </p>
      </div>
    </div>
  );
}

function JobType14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel14 />
    </div>
  );
}

function User14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          James Thompson
        </p>
      </div>
    </div>
  );
}

function Clock14() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock14 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">01:12:03</p>
      </div>
    </div>
  );
}

function IconLabel14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          CW-000987
        </p>
      </div>
    </div>
  );
}

function Labels14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer14 />
      <IconLabel14 />
    </div>
  );
}

function Content17() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType14 />
      <User14 />
      <Labels14 />
    </div>
  );
}

function MainConteiner14() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar29 />
      <Content17 />
    </div>
  );
}

function LocationCrosshairs14() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs14 />
    </div>
  );
}

function Locate14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button17 />
    </div>
  );
}

function Badge15() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate14 />
      <Badge15 />
    </div>
  );
}

function Mother15() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner14 />
          <RightBlock14 />
        </div>
      </div>
    </div>
  );
}

function CardVariant16() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother15 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Avatar30() {
  return (
    <div
      className="absolute bg-[#fff4d8] box-border content-stretch flex flex-col gap-2.5 inset-0 items-center justify-center p-0 rounded-[64px]"
      data-name="Avatar"
    >
      <div
        className="font-['Noto_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#3f495a] text-[12px] text-center w-8"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px]">JM</p>
      </div>
    </div>
  );
}

function Avatar31() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Avatar30 />
    </div>
  );
}

function Label15() {
  return (
    <div className="relative shrink-0 size-3" data-name="label">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="label">
          <path
            clipRule="evenodd"
            d={svgPaths.p60f7f00}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function TypeLabel15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-3 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="type-label"
    >
      <Label15 />
      <div
        className="basis-0 flex flex-col font-['Noto_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4740d4] text-[10px] text-left text-nowrap tracking-[1px] uppercase"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[12px] overflow-inherit">
          Community work
        </p>
      </div>
    </div>
  );
}

function JobType15() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Job type"
    >
      <TypeLabel15 />
    </div>
  );
}

function User15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="User"
    >
      <div
        className="basis-0 font-['Noto_Sans:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#3f495a] text-[14px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Joshua Miller
        </p>
      </div>
    </div>
  );
}

function Clock15() {
  return (
    <div className="relative shrink-0 size-3" data-name="clock">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_1_42404)" id="clock">
          <g id="line">
            <path d={svgPaths.p53f07f0} fill="var(--fill-0, #545F70)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3395ff00}
              fill="var(--fill-0, #545F70)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42404">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Timer15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Timer"
    >
      <Clock15 />
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="block leading-[16px] whitespace-pre">01:56:43</p>
      </div>
    </div>
  );
}

function IconLabel15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="icon-label"
    >
      <div
        className="font-['Noto_Sans:Medium',_sans-serif] font-medium leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#545f70] text-[12px] text-left text-nowrap"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          CW-000543
        </p>
      </div>
    </div>
  );
}

function Labels15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Labels"
    >
      <Timer15 />
      <IconLabel15 />
    </div>
  );
}

function Content18() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <JobType15 />
      <User15 />
      <Labels15 />
    </div>
  );
}

function MainConteiner15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Main Conteiner"
    >
      <Avatar31 />
      <Content18 />
    </div>
  );
}

function LocationCrosshairs15() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="location-crosshairs"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42401)" id="location-crosshairs">
          <g id="line">
            <path d={svgPaths.p511b200} fill="var(--fill-0, #4740D4)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p142cf700}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42401">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <LocationCrosshairs15 />
    </div>
  );
}

function Locate15() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-center justify-end p-0 relative shrink-0 size-8"
      data-name="Locate"
    >
      <Button18 />
    </div>
  );
}

function Badge16() {
  return (
    <div
      className="bg-[#e8fcf5] relative rounded-[1e+11px] shrink-0 w-full"
      data-name="Badge"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-0.5 relative w-full">
          <div
            className="flex flex-col font-['Noto_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#007a52] text-[12px] text-left text-nowrap"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            <p className="block leading-[16px] whitespace-pre">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightBlock15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-end justify-between pb-2 pt-0 px-0 relative self-stretch shrink-0"
      data-name="Right-block"
    >
      <Locate15 />
      <Badge16 />
    </div>
  );
}

function Mother16() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mother">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start px-4 py-2 relative w-full">
          <MainConteiner15 />
          <RightBlock15 />
        </div>
      </div>
    </div>
  );
}

function CardVariant17() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[89px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Card-Variant-2"
    >
      <Mother16 />
      <div className="bg-[#dbe0eb] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function CardList() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-px grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Card List"
    >
      <CardVariant2 />
      <CardVariant3 />
      <CardVariant4 />
      <CardVariant5 />
      <CardVariant6 />
      <CardVariant7 />
      <CardVariant8 />
      <CardVariant9 />
      <CardVariant10 />
      <CardVariant11 />
      <CardVariant12 />
      <CardVariant13 />
      <CardVariant14 />
      <CardVariant15 />
      <CardVariant16 />
      <CardVariant17 />
    </div>
  );
}

function ListScroll() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-start justify-start min-h-px min-w-px order-1 overflow-x-clip overflow-y-auto p-0 relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full"
      data-name="ListScroll"
    >
      <CardList />
    </div>
  );
}

function SidebarComponent() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-4 box-border content-stretch flex flex-col-reverse items-start justify-start left-4 p-0 rounded-xl top-4 w-[352px]"
      data-name="SidebarComponent"
    >
      <div className="absolute border border-[#dbe0eb] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <TopBlock />
      <ListScroll />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Icons">
          <path
            d={svgPaths.p19fe6470}
            id="Icon"
            stroke="var(--stroke-0, #4740D4)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <Icons1 />
    </div>
  );
}

function Fullscreen() {
  return (
    <div
      className="bg-[#ffffff] h-11 relative rounded-xl shrink-0 w-full"
      data-name="Fullscreen"
    >
      <div className="absolute border border-[#bfc6d4] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-3 py-2 relative w-full">
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="plus">
          <path d={svgPaths.p9c5c80} fill="var(--fill-0, #4740D4)" id="line" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <Plus />
    </div>
  );
}

function Minus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="minus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="minus">
          <path
            clipRule="evenodd"
            d={svgPaths.p8340000}
            fill="var(--fill-0, #4740D4)"
            fillRule="evenodd"
            id="line"
          />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <Minus />
    </div>
  );
}

function Detauks() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-full"
      data-name="Detauks"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center p-[6px] relative w-full">
          <Button20 />
          <div className="flex h-[0px] items-center justify-center relative shrink-0 w-[26px]">
            <div className="flex-none rotate-[270deg]">
              <div className="h-[26px] relative w-0">
                <div className="absolute bottom-[-1.923%] left-[-0.5px] right-[-0.5px] top-0">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 2 27"
                  >
                    <path
                      d={svgPaths.p1ab1500}
                      fill="var(--stroke-0, #BFC6D4)"
                      id="Vector 1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Button21 />
        </div>
      </div>
      <div className="absolute border border-[#bfc6d4] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function Stack() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="stack">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_42486)" id="stack">
          <g id="line">
            <path
              clipRule="evenodd"
              d={svgPaths.p128adf00}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pbecbd00}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p22982e80}
              fill="var(--fill-0, #4740D4)"
              fillRule="evenodd"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_42486">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-3 py-1 relative rounded-lg shrink-0 size-8"
      data-name="Button"
    >
      <Stack />
    </div>
  );
}

function Button23() {
  return (
    <div
      className="bg-[#ffffff] h-11 relative rounded-xl shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-[#bfc6d4] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-3 py-2 relative w-full">
          <Button22 />
        </div>
      </div>
    </div>
  );
}

function MapControls() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 right-4 top-4 w-11"
      data-name="MapControls"
    >
      <Fullscreen />
      <Detauks />
      <Button23 />
    </div>
  );
}

function MapContainerHover() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px overflow-auto relative shrink-0 w-full"
      data-name="Map-container-hover"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[-110.134px] left-[-516px] right-[-369.974px] top-[-136px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <Component4 />
      <Component5 />
      <PinHoverCard />
      <PinHoverCard1 />
      <PinHoverCard2 />
      <PinHoverCard3 />
      <SidebarComponent />
      <MapControls />
    </div>
  );
}

function Content19() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <MapContainerHover />
    </div>
  );
}

function SecondaryNavigationContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="SecondaryNavigation+Content"
    >
      <SecondaryNav />
      <Content19 />
    </div>
  );
}

export default function LoneWirkerLiveMapBlocksView() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full"
      data-name="lone-wirker/live map (blocks view)"
    >
      <NavigationWebSmall />
      <SecondaryNavigationContent />
      <div
        className="[background-size:148.28%_137.93%] absolute bg-[57.14%_68.18%] bg-no-repeat left-[1343px] rounded-[100px] shadow-[0px_2.4px_8px_0px_rgba(0,0,0,0.06),0px_14px_28px_0px_rgba(0,0,0,0.16)] size-[65px] top-[927px]"
        data-name="FEB"
        style={{ backgroundImage: `url('${imgFeb}')` }}
      />
    </div>
  );
}