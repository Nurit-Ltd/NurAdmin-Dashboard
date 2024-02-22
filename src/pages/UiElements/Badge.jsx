import React from 'react'
import BredCrumb from '../../components/shared/Buredcrumb/BredCrumb'
import PrimaryBadge from '../../components/Badge/Style1/PrimaryBadge'
import SecondaryBadge from '../../components/Badge/Style1/SecondaryBadge'
import DarkBadge from '../../components/Badge/Style1/DarkBadge'
import GrayBadge from '../../components/Badge/Style1/GrayBadge'
import LightBadge from '../../components/Badge/Style1/LightBadge'
import WarringBadge from '../../components/Badge/Style1/WarringBadge'
import DangerBadge from '../../components/Badge/Style1/DangerBadge'
import SuccessBadge from '../../components/Badge/Style1/SuccessBadge'
import InfoBadge from '../../components/Badge/Style1/InfoBadge'
import PrimaryBadge2 from '../../components/Badge/Style2/PrimaryBadge2'
import SecondaryBadge2 from '../../components/Badge/Style2/SecondaryBadge2'
import DarkBadge2 from '../../components/Badge/Style2/DarkBadge2'
import GrayBadge2 from '../../components/Badge/Style2/GrayBadge2'
import LightBadge2 from '../../components/Badge/Style2/LightBadge2'
import WarningBadge2 from '../../components/Badge/Style2/WarningBadge2'
import DangerBadge2 from '../../components/Badge/Style2/DangerBadge2'
import SuccessBadge2 from '../../components/Badge/Style2/SuccessBadge2'
import InfoBadge2 from '../../components/Badge/Style2/InfoBadge2'
import PrimaryBadge3 from '../../components/Badge/Style3/PrimaryBadge3'
import SecondaryBadge3 from '../../components/Badge/Style3/SecondaryBadge3'
import DarkBadge3 from '../../components/Badge/Style3/DarkBadge3'
import GrayBadge3 from '../../components/Badge/Style3/GrayBadge3'
import LightBadge3 from '../../components/Badge/Style3/LightBadge3'
import WarningBadge3 from '../../components/Badge/Style3/WarningBadge3'
import DangerBadge3 from '../../components/Badge/Style3/DangerBadge3'
import SuccessBadge3 from '../../components/Badge/Style3/SuccessBadge3'
import InfoBadge3 from '../../components/Badge/Style2/InfoBadge3'

const Badge = () => {
  return (
    <div className='container_fluid'>
      <div className="mx-auto max-w-242.5">
        <BredCrumb pageName={"Badge"} />
        <div className="flex flex-col gap-7">
          {/* Badge style one  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Badge Style 1
              </h3>
            </div>
            <div class="p-4 sm:p-6 xl:p-10">
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <PrimaryBadge />
                <SecondaryBadge />
                <DarkBadge />
                <GrayBadge />
                <LightBadge />
                <WarringBadge />
                <DangerBadge />
                <SuccessBadge />
                <InfoBadge />
              </div>
            </div>
          </div>
          {/* Badge style two  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Badge Style 2
              </h3>
            </div>
            <div class="p-4 sm:p-6 xl:p-10">
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <PrimaryBadge2 />
                <SecondaryBadge2 />
                <DarkBadge2 />
                <GrayBadge2 />
                <LightBadge2 />
                <WarningBadge2 />
                <DangerBadge2 />
                <SuccessBadge2 />
                <InfoBadge2 />
              </div>
            </div>
          </div>
          {/* Badge style three  */}
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div class="border-b border-stroke px-4 py-4 sm:px-6 xl:px-7">
              <h3 class="font-medium text-black">
                Badge Style 3
              </h3>
            </div>
            <div class="p-4 sm:p-6 xl:p-10">
              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <PrimaryBadge3 />
                <SecondaryBadge3 />
                <DarkBadge3 />
                <GrayBadge3 />
                <LightBadge3 />
                <WarningBadge3 />
                <DangerBadge3 />
                <SuccessBadge3 />
                <InfoBadge3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badge
