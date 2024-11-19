import React from "react";
import Image from "next/image";
import BugIcon from "../asssets/images/bug.svg";
import UserIcon from "../asssets/images/profile.svg";
import VersionIcon from "../asssets/images/version.svg";
import BroadcastIcon from "../asssets/images/brodcast.svg";
import NoteIcon from "../asssets/images/Note.svg";
import RefreshIcon from "../asssets/images/Restore.svg";

const NotificationSidebar = () => {
  return (
    <div className="bg-backgroundLight text-primaryFontColor h-screen  w-80 p-6 space-y-8 border-l border-primaryBorder">
      {/* Notifications Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="default">
            <div className="background">
              <Image src={BugIcon} alt="Bug" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">
                You have a bug that needs...
              </p>
              <p className="text-xs text-secondaryFontColor">Just now</p>
            </div>
          </div>
          <div className="default">
            <div className="background">
              <Image src={UserIcon} alt="User" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">
                New account registered su...
              </p>
              <p className="text-xs text-secondaryFontColor">59 minutes ago</p>
            </div>
          </div>
          <div className="default">
            <div className="background">
              <Image src={VersionIcon} alt="Version" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">Released a new version</p>
              <p className="text-xs text-secondaryFontColor">12 hours ago</p>
            </div>
          </div>
          <div className="default">
            <div className="background">
              <Image
                src={BroadcastIcon}
                alt="Password"
                width={16}
                height={16}
              />
            </div>
            <div>
              <p className="text-sm font-medium">Facebook password need t...</p>
              <p className="text-xs text-secondaryFontColor">Today, 11:59 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Activities</h2>
        <div className="space-y-4">
          <div className="default">
            <div className="background">
              <Image src={NoteIcon} alt="Note" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">{`"Personal" Notes edited`}</p>
              <p className="text-xs text-secondaryFontColor">Just now</p>
            </div>
          </div>
          <div className="default">
            <div className="background">
              <Image src={UserIcon} alt="User" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">New account created</p>
              <p className="text-xs text-secondaryFontColor">59 minutes ago</p>
            </div>
          </div>
          <div className="default">
            <div className="background">
              <Image src={RefreshIcon} alt="Refresh" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">Amazon Password updated</p>
              <p className="text-xs text-secondaryFontColor">12 hours ago</p>
            </div>
          </div>
          <div className="default">
            <div className="background">
              <Image src={UserIcon} alt="User" width={16} height={16} />
            </div>
            <div>
              <p className="text-sm font-medium">New Account created</p>
              <p className="text-xs text-secondaryFontColor">Today, 11:59 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSidebar;
