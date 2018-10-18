import { TestBed } from '@angular/core/testing';

import { GroupSettingService } from './group-setting.service';

describe('GroupSettingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupSettingService = TestBed.get(GroupSettingService);
    expect(service).toBeTruthy();
  });
});
