<?php

namespace App\Concerns;
trait HasMosaicoRoles
{
    public static string $SUPER_ADMIN_ROLE = 'super-admin';
    public static string $ADMIN_ROLE = 'admin';
    public static string $VERIFIED_DEVELOPER_ROLE = 'verified-developer';
    public static string $DISABLED_ROLE = 'disabled';

    public function isSuperAdmin(): bool
    {
        return $this->hasRole(self::$SUPER_ADMIN_ROLE);
    }

    public function isAdmin(): bool
    {
        return $this->hasRole(self::$ADMIN_ROLE);
    }

    public function isDisabled(): bool
    {
        return $this->hasRole(self::$DISABLED_ROLE);
    }

    public function isVerifiedDeveloper(): bool
    {
        return $this->hasRole(self::$VERIFIED_DEVELOPER_ROLE);
    }

    public function isHighLevelRole(): bool
    {
        return $this->isSuperAdmin() || $this->isAdmin();
    }

    public function canUploadInfiniteWidgets(): bool
    {
        return $this->isHighLevelRole() || $this->isVerifiedDeveloper();
    }
}
